import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  
  canActivate(): boolean {
    debugger
    if (!this.auth.isAuthenticated()) {
      window.location.href = `${environment.baseUrl}/login`;
      return false;
     } 
     return true;
  }
  
}
