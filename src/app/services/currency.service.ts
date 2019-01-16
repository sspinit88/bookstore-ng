import {Injectable} from '@angular/core';
import {CurrencyModel} from '../models/currency.model';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CurrencyService {

  currency: CurrencyModel[] = [
    {
      name: 'USD',
      isActive: true,
      coefficient: 1
    },
    {
      name: 'GBP',
      isActive: false,
      coefficient: 0.5
    },
    {
      name: 'RUB',
      isActive: false,
      coefficient: 0.5
    },
    {
      name: 'EUR',
      isActive: false,
      coefficient: 1.2
    }
  ];

  private currencySourse = new BehaviorSubject<CurrencyModel>(this.currency);
  selectedCurrency = this.currencySourse.asObservable();

  constructor() {
  }

  selectCurrency(name: string) { // принимает обновленный объект с валютой
    // у нас имеется готовый массив с валютами,
    // перебираем массив, на каждой итерации проверим имя валюты на совпадение
    // с полученным именем, если есть совпадение, то меняем isActive на true,
    // у остальных ставим false.
    // Далее, собрать все обратно в массив и оповестить подписанные компоненты
    // о проведенных изменениях

    this.currency = this.currency.map((currency: CurrencyModel) => {
      // if (currency.name === name) {
      //   currency.isActive = true;
      // } else {
      //   currency.isActive = false;
      // }
      currency.isActive = currency.name === name;
      return currency;
    });
    // console.log('this.currency in service', this.currency);
    this.currencySourse.next(this.currency);
    // далее переходим в panel.component.ts ($s)
  }

}
