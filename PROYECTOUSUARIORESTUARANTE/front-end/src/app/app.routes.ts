import { Routes } from '@angular/router';
import { Login } from '../login/login';
import { ListaMenu } from '../lista-menu/lista-menu';

export const routes: Routes = [

    { path: 'login', component: Login },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'lista-menu', component: ListaMenu}
];
