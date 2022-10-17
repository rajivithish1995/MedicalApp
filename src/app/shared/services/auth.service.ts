import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  isAuthenticated() {
    debugger
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const userType = localStorage.getItem('user-type');
    if (token && userId && userType?.toLowerCase() === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
