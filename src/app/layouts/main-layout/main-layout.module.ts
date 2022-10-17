import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutes } from '../auth-layout/auth.layout.routing';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
