import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html',
  selector: 'app-home'
})
export class HomeComponent {
  constructor(private title: Title) {
    this.title.setTitle('Home');
  }
}
