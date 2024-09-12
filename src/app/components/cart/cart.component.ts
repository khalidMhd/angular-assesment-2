import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems = this.cartService.getCartItems();

  constructor(private cartService: CartService) {}

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
