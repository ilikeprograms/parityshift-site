import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './products-list.component.html',
  selector: 'app-products-list'
})
export class ProductsListComponent {
  public showFullPortholeInfo: boolean = false;

  constructor(private title: Title) {
    this.title.setTitle('Products');
  }
}
