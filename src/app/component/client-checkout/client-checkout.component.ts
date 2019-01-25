import {Component, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SalesService} from '../../services/sales.service';

@Component({
  selector: 'app-client-checkout',
  templateUrl: './client-checkout.component.html',
  styleUrls: ['./client-checkout.component.css']
})
export class ClientCheckoutComponent implements OnInit {

  basketItem = [];
  checkoutList; // данные выводимые ввиде таблицы
  adressIsVisible = false;

  name = '';
  phone = '';
  email = '';

  totalSum: number;

  constructor(
      private basketService: BasketService,
      private router: Router,
      private salesService: SalesService
  ) {
  }

  ngOnInit() {
    // получение всех элементов, которые есть в корзине
    this.basketService.getBasketItem()
        .subscribe(items => {
          items.length ? this.getAllBasketItems(items) : this.redirectedToPage();
        });
  }

  getAllBasketItems(items) {
    this.checkoutList = items; // сохраняем все товары в переменную
    // console.log('this.checkoutList in ClientCheckoutComponent', this.checkoutList);

    this.totalSum = this.checkoutList.reduce((sumAc, item) => sumAc += item.sum, 0);
  }

  redirectedToPage() {
    this.router.navigate(['']);
  }

  trackByFn(index, item) {
    return item.id;
  }

  deleteBookFromBasket(id) {
    this.basketService.deleteItem(id);
  }

  onChangeItemCount(item) {
    item.sum = item.price * item.count;
    this.totalSum = this.checkoutList.reduce((sumAc, items) => sumAc += items.sum, 0);
  }

  onSubmit(form: NgForm) {
    // save in bd
    const order = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      stautus: 'processing',
      total: this.totalSum,
      items: this.checkoutList,
    };

    this.salesService.addNewOrder(order).subscribe(response => {
      console.log('Order added', response);
      // todo вывести окно с сообщением о том, что заказ принят
      // todo реализовать с помощью promise

      if (response) {
        this.basketService.clearBasket();
        this.router.navigate(['']);
      }

    });

  }

}
