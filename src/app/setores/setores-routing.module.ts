import { Routes } from '@angular/router';

import { ListarSetorComponent } from './listar';
import { CadastrarSetorComponent } from './cadastrar';
import { EditarSetorComponent } from './editar';
import { AuthGuard } from './../guards';

export const SetorRoutes: Routes = [
	{ 
		path: 'setores/listar', 
		component: ListarSetorComponent,
		canActivate:[AuthGuard] 
	}, 
	{ 
		path: 'setores/cadastrar', 
		component: CadastrarSetorComponent,
		canActivate:[AuthGuard] 
	},
	{ 
		path: 'setores/consultar/:id', 
		component: EditarSetorComponent,
		canActivate:[AuthGuard] 
	}
];
