import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComputadorRoutes } from './computadores';

const routes: Routes = [
{ 
		path: '', 
		redirectTo: '/computadores/listar', 
		pathMatch: 'full' 
	},

...ComputadorRoutes	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
