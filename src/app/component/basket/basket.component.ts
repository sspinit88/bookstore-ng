import {Component, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basketItems = [];

  constructor(
      private basketService: BasketService,
  ) {
  }

  ngOnInit() {
    // получаем все эл. корзины
    this.basketService.getBasketItem()
        .subscribe(items => {
          this.basketItems = items;
          console.log('this.basketItems', this.basketItems);
        });

  }

  clearThisBasket() {
    this.basketService.clearBasket();
  }

  deleteBookFromBasket(id) {
    // console.log(id);
    this.basketService.deleteItem(id);
  }

}


