import { Routes } from '@angular/router';

import { ListarUsuarioComponent } from './listar';
import { CadastrarUsuarioComponent } from './cadastrar';
import { EditarUsuarioComponent } from './editar';

export const UsuarioRoutes: Routes = [
	{ 
		path: 'usuarios/listar', 
		component: ListarUsuarioComponent 
	}, 
	{ 
		path: 'usuarios/cadastrar', 
		component: CadastrarUsuarioComponent 
	},
	{ 
		path: 'usuarios/consultar/:id', 
		component: EditarUsuarioComponent 
	}
];
