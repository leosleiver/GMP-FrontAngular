import { Routes } from '@angular/router';

import { ListarUsuarioComponent } from './listar';
import { CadastrarUsuarioComponent } from './cadastrar';
import { EditarUsuarioComponent } from './editar';
import { AuthGuard } from './../guards';

export const UsuarioRoutes: Routes = [
	{ 
		path: 'usuarios/listar', 
		component: ListarUsuarioComponent,
		canActivate:[AuthGuard] 
	}, 
	{ 
		path: 'usuarios/cadastrar', 
		component: CadastrarUsuarioComponent,
		canActivate:[AuthGuard] 
	},
	{ 
		path: 'usuarios/consultar/:id', 
		component: EditarUsuarioComponent,
		canActivate:[AuthGuard] 
	}
];
