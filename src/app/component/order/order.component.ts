import {Component, OnInit} from '@angular/core';
import {SalesService} from '../../services/sales.service';
import {OrderModel} from '../../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: OrderModel[] = [];
  isEdit: boolean = true;

  constructor(
      private salesService: SalesService
  ) {
  }

  ngOnInit() {
    // get all orders
    this.salesService.getOrders()
        .subscribe((responseOrders: OrderModel[]) => {
          if (responseOrders) {
            this.orders = responseOrders;
            // console.log('get all orders', responseOrders,
            //     'length: ', responseOrders.length);
          }
        });
  }

  btnEditClass() {
    return this.isEdit === true ? 'btn-danger' : 'btn-success';
  }

  changeStatus(order) {
    //  не работает
  }

  saveChanges(order) {

  }

}
