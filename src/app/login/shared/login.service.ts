import { Injectable , EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {Usuario} from './';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 private usuarioAutenticado: boolean;

 mostrarMenuEmitter = new EventEmitter<boolean>();


  constructor(private router: Router) { }

fazerLogin(usuario:Usuario){

	if(usuario.matricula == '123' &&
		usuario.senha == 'leomir'){

		 this.usuarioAutenticado = true;
		this.mostrarMenuEmitter.emit(true);

	    this.router.navigate(['/computadores/listar']);
	} else {
		 this.usuarioAutenticado = false;
		 	this.mostrarMenuEmitter.emit(false);
	}
}


  usuarioEstaAutenticado(){
  	return this.usuarioAutenticado;
  }

}
