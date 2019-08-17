import { Routes } from '@angular/router';

import { ListarComputadorComponent } from './listar';
import { CadastrarComputadorComponent } from './cadastrar';
import { EditarComputadorComponent } from './editar';

export const ComputadorRoutes: Routes = [
	{ 
		path: 'computadores/listar', 
		component: ListarComputadorComponent 
	}, 
	{ 
		path: 'computadores/cadastrar', 
		component: CadastrarComputadorComponent 
	},
	{ 
		path: 'computadores/editar/:id', 
		component: EditarComputadorComponent 
	}
];
