import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html',
  selector: 'app-home',
  styles: [`
    .row {
      flex-wrap: wrap;
    }
    
    .col-md-4 {
      display: flex;
    }

    .card {
      display: flex;
      flex-direction: column;
    }
    
    .card-block {
      flex: 1 0 auto;
    }
  `]
})
export class HomeComponent {
  constructor(private title: Title) {
    this.title.setTitle('Home');
  }
}
