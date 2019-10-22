import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComputadorRoutes } from './computadores';
import {SetorRoutes } from './setores';
import {UsuarioRoutes } from './usuarios';
import {LoginRoutes } from './login';
import {InicioRoutes} from './inicio';

const routes: Routes = [
{ 
		path: '', 
		redirectTo: 'login', 
		pathMatch: 'full' 
	},

...ComputadorRoutes,
...SetorRoutes,
...UsuarioRoutes,
...LoginRoutes,
...InicioRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
