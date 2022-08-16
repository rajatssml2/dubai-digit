import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  onLogout() {
    localStorage.removeItem('loginUser');
    // localStorage.removeItem('citizen_details');
  }
}
