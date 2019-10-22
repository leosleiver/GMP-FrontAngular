import { Routes } from '@angular/router';

import { InicioComponent } from './inicio.component';
import { AuthGuard } from './../guards';

export const InicioRoutes: Routes = [
	{ 
		path: 'inicio', 
		component: InicioComponent ,
		canActivate:[AuthGuard]
	}
];
