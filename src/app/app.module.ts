import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PanelComponent} from './component/panel/panel.component';
import {AddBookComponent} from './component/add-book/add-book.component';
import {EditBookComponent} from './component/edit-book/edit-book.component';
import {AboutComponent} from './component/about/about.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {BooksService} from './services/books.service';
import {IdService} from './services/id.service';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './component/login/login.component';
import {AuthService} from './services/auth.service';
import {RegistrationComponent} from './component/registration/registration.component';
import {CustomDatePipe} from './pipes/custom-date.pipe';
import {CurrencyComponent} from './component/cyrrency/currency.component';
import {CurrencyService} from './services/currency.service';
import {BasketComponent} from './component/basket/basket.component';
import {BasketService} from './services/basket.service';
import { ClientHomeComponent } from './component/client-home/client-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AddBookComponent,
    EditBookComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    CustomDatePipe,
    CurrencyComponent,
    BasketComponent,
    ClientHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    BooksService,
    IdService,
    AuthService,
    CurrencyService,
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
