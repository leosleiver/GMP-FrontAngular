import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComputadorRoutes } from './computadores';
import {SetorRoutes } from './setores';

const routes: Routes = [
{ 
		path: '', 
		redirectTo: '/computadores/listar', 
		pathMatch: 'full' 
	},

...ComputadorRoutes,
...SetorRoutes	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
