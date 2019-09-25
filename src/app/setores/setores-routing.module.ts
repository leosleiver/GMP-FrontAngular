import { Routes } from '@angular/router';

import { ListarSetorComponent } from './listar';
import { CadastrarSetorComponent } from './cadastrar';
import { EditarSetorComponent } from './editar';

export const SetorRoutes: Routes = [
	{ 
		path: 'setores/listar', 
		component: ListarSetorComponent 
	}, 
	{ 
		path: 'setores/cadastrar', 
		component: CadastrarSetorComponent 
	},
	{ 
		path: 'setores/consultar/:id', 
		component: EditarSetorComponent 
	}
];
