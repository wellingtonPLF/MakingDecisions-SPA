import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainScreenComponent} from "./main-screen/main-screen.component";
import {LoginComponent} from "./usuario/login/login.component";
import {CadastroComponent} from "./usuario/cadastro/cadastro.component";
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: '**',
    component: EmptyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
