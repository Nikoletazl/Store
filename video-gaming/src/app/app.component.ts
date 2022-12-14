import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Cart } from './models/cart.module';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'video-gaming';
  cart: Cart = {items: []}

  constructor(private cartService: CartService, private newService: CommonService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart
    })
   
  }
}
