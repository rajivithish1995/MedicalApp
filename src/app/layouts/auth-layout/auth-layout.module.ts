import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutes } from './auth.layout.routing';


@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AuthLayoutComponent
  ]
})
export class AuthLayoutModule { }
