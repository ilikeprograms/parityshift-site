import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

require('dotenv').config();

const spdy = require('spdy');
const compression = require('compression');
const fs = require('fs');
let crypto = require('crypto');
let session = require('express-session');
let helmet = require('helmet');
let csrf = require('csurf');
let nodemailer = require('nodemailer');

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import { readFileSync } from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

let expiryDate = new Date(Date.now() + 60 * 60 * 1000);
let sessionSecret = crypto.randomBytes(32).toString('base64');

let sess = {
  name: 'parityShiftSession',
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    domain: 'localhost',
    path: '/',
    expires: expiryDate,
    sameSite: true
  }
};

if (app.get('env') === 'production') {
  sess.cookie.secure = true; // serve secure cookies
  sess.cookie.domain = 'parityshift.com';
}

app.use(compression());
app.use(session(sess));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(csrf());

app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken());

  return next();
});

const PORT = process.env.PORT || 4000;
const SECUREPORT = process.env.SECUREPORT || 443;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { mailSettings } from './mail-settings';

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('/health-check', (req, res) => res.sendStatus(200));

app.use((req, res, next) =>
  // check if it is a secure (https) request
  // if not redirect to the equivalent https url
  app.get('env') === 'production' && !req.secure ? res.redirect('https://' + req.hostname + req.url) : next()
);

app.post('/api/contact', (req, res) => {
  let transporter = nodemailer.createTransport(mailSettings.smtpConfig);

  const message = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: mailSettings.to,
    subject: `${mailSettings.subjectPrefix} ${req.body.subject}`,
    text: req.body.message,
    replyTo: req.body.email
  };

  transporter.sendMail(message, function (error, info) {
    if (error) {
      res.status(500).end();
      return;
    } else {
      res.status(200).end();
      return;
    }
  });
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});

if (app.get('env') === 'production') {
  const options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
  };

  spdy.createServer(options, app).listen(SECUREPORT);

  console.log(`HTTP 2 running on on http://localhost:${SECUREPORT}`);
}
