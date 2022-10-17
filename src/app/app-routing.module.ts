import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainLayoutComponent,
  //   loadChildren: () => import('./layouts/main-layout/main-layout.module').then(m => m.MainLayoutModule)

  //  // canActivate: [AuthGuard]
  // },
  // {
  //   path: 'auth',
  //   component: LoginComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
