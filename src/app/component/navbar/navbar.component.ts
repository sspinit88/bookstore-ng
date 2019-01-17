import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;
  userName: string;

  isPublick: boolean = false; //

  constructor(
      private authServise: AuthService,
      private router: Router
  ) {
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnInit() {
    // осуществление скрытия корзины при переходе на страницу "panel"
    this.router.events.subscribe((e:Event) => {
      // роутер имеет метод event
      // проверять url нужно когда закончится состояние NavigationEnd

      // console.log('event при загрузке', e);

      if (e instanceof NavigationEnd) {
        // ! import {Router, Event, NavigationEnd} from '@angular/router';
        // проверяем относится ли событие e (event) к NavigationEnd

        // console.log('e instanceof NavigationEnd', e);

        // если у данного e (события) url не содержит в себе 'panel', то
        // получим false (-1 = false) в this.isPublick;
        this.isPublick = e.url.indexOf('panel') === -1;
      }
    })
    //
    this.authServise.checkAuth().subscribe(response => {
      if (response) {
        this.isLogin = true;
        this.userName = response.email;
      } else {
        this.isLogin = false;
      }
    });
    //

  }

  logOut() {
    this.authServise.logout()
        .then(() => {
          this.router.navigate(['/login']);
        });
    this.isLogin = false;
  }



}
