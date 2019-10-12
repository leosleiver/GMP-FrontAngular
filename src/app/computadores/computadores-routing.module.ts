import { Routes } from '@angular/router';

import { ListarComputadorComponent } from './listar';
import { CadastrarComputadorComponent } from './cadastrar';
import { EditarComputadorComponent } from './editar';
import { AuthGuard } from './../guards';

export const ComputadorRoutes: Routes = [
	{ 
		path: 'computadores/listar', 
		component: ListarComputadorComponent ,
		canActivate:[AuthGuard]
	}, 
	{ 
		path: 'computadores/cadastrar', 
		component: CadastrarComputadorComponent,
		canActivate:[AuthGuard]
	},
	{ 
		path: 'computadores/consultar/:id', 
		component: EditarComputadorComponent,
		canActivate:[AuthGuard] 
	}
];
