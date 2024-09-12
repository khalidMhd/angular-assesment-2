import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { PricePipe } from '../../pipes/price/price.pipe';
import { InCartDirective } from '../../directive/cart/in-cart.directive';

@Component({
  selector: 'app-product',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PricePipe, InCartDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: any;
  inCart: boolean = false;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addProduct(this.product);
    this.inCart = true;
  }
}
