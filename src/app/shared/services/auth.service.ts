import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  isAuthenticated() {
    // const token = localStorage.getItem('token');
    // const userId = localStorage.getItem('userId');
    const userType = localStorage.getItem('user-type');
    if (userType?.toLowerCase() === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
