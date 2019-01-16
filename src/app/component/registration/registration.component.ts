import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email: string;
  password: string;

  constructor(
      private authService: AuthService,
      private router: Router
  ) {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.login(this.email, this.password)
        .then(user => {
          this.router.navigate(['/login']);
          // todo вывести сообщение об успешной аутентификации, переход сделать с задержкой, что бы сообщение было прочтено
        })
        .catch(err => {
          // todo вывести сообщение об ошибке
          console.log(err);
        });
  }

}
