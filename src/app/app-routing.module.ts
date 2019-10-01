import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComputadorRoutes } from './computadores';
import {SetorRoutes } from './setores';
import {UsuarioRoutes } from './usuarios';

const routes: Routes = [
{ 
		path: '', 
		redirectTo: '/computadores/listar', 
		pathMatch: 'full' 
	},

...ComputadorRoutes,
...SetorRoutes,
...UsuarioRoutes	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
