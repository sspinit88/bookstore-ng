import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PanelComponent} from './component/panel/panel.component';
import {AboutComponent} from './component/about/about.component';
import {AddBookComponent} from './component/add-book/add-book.component';
import {EditBookComponent} from './component/edit-book/edit-book.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {RegistrationComponent} from './component/registration/registration.component';
import {ClientHomeComponent} from './component/client-home/client-home.component';
import {ClientCheckoutComponent} from './component/client-checkout/client-checkout.component';
import {OrderComponent} from './component/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: ClientHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'panel',
    component: PanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addbook',
    component: AddBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/:id',
    component: EditBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    component: ClientCheckoutComponent
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: '**', // усли введен адрес стр, которой нет в перечисленных выше
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
