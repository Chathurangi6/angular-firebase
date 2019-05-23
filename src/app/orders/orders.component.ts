import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-orders',
  template: '<h2>{{"Hello " + name}}</h2>',
  styles: []
})
export class OrdersComponent implements OnInit {
  @Input('parentData') public name ;
  constructor() { }

  ngOnInit() {
  }

}
