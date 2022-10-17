import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutes } from './main-layout.routing';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
