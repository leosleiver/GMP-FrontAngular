import { Injectable , EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Usuario } from '../../usuarios/shared';
import {ConfigService} from '../../service';


@Injectable()
export class LoginService {

	private usuarioAutenticado: boolean;
	private baseUrlService:string = '';
	private user;
 

	mostrarMenuEmitter = new EventEmitter<boolean>();


	constructor(private http: HttpClient,
		private configService: ConfigService) {

		this.baseUrlService = configService.getUrlService() + 'usuario/';

	}

	verificarUsuario(usuario:Usuario){
        
      
      this.user = this.http.put(this.baseUrlService + 'autenticarUsuario',usuario)

		return this.user;
       
  }   

usuarioEstaAutenticado(){
	return this.usuarioAutenticado;
}

setFalseforLogout(){
	    this.usuarioAutenticado = false;
		this.mostrarMenuEmitter.emit(false);
	
}
setTrue(){
	this.usuarioAutenticado = true;
	this.mostrarMenuEmitter.emit(true);
}

}

