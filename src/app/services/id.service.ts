import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  constructor() {
  }

  generate() {
    return 'xxxx-xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, function (c) {
      let
          r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
