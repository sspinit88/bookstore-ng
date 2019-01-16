import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;
  userName: string;

  constructor(
      private authServise: AuthService,
      private router: Router
  ) {
  }

  ngOnInit() {
    this.authServise.checkAuth().subscribe(response => {
      if (response) {
        this.isLogin = true;
        this.userName = response.email;
      } else {
        this.isLogin = false;
      }
    });
  }

  logOut() {
    this.authServise.logout()
        .then(() => {
          this.router.navigate(['/login']);
        });
    this.isLogin = false;
  }

}
