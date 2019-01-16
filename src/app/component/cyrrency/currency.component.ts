import {Component, OnInit} from '@angular/core';
import {CurrencyModel} from '../../models/currency.model';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  selectedCurrency: CurrencyModel; // текущий выбранный объект
  currentCurrencyList: CurrencyModel[]; // текущий список

  constructor(
      private currencyServices: CurrencyService
  ) {
  }

  ngOnInit() {
    this.currencyServices.selectedCurrency
        .subscribe(data => {
          // текущий список
          this.currentCurrencyList = data.slice();
          // текущий выбранный объект
          this.selectedCurrency = Object.create(data.find(obj => obj.isActive));
          // console.log('this.selectedCurrency', this.selectedCurrency);
        });
  }

  updateCurrency() {
    // отдаем выбранное название валюты
    this.currencyServices.selectCurrency(this.selectedCurrency.name);
  }

}
