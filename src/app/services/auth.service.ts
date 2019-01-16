import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
      private afAuth: AngularFireAuth
  ) {
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  checkAuth(): Observable<any> {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

}
