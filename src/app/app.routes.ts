import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { LoginComponent } from './pages/login/login.component';
import { Menuitemedit } from './pages/menuitemedit/menuitemedit';
import {CrearUsuario} from './pages/crear-usuario/crear-usuario';
import { Crearmenu } from './pages/crearmenu/crearmenu';
import { HomeMenu } from './pages/home-menu/home-menu';

export const routes: Routes = [
  {
    path: '', //cuando la ruta es vacía (localhost:4200)
    redirectTo: 'login', //redirige a la ruta 'login'
    pathMatch: 'full' 
  },
  {
    path: '', 
    component: TemplateComponent,
    children: [
      { path: 'home', component: HomeMenu }
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: CrearUsuario },
  { path: 'menuitemedit', component: Menuitemedit },
  { path: 'crearmenu', component: Crearmenu }
];
