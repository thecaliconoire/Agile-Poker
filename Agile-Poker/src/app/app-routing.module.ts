import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginModule} from './modules/login/login.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


