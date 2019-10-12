import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


 
import {Usuario} from './';
import {ConfigService} from '../../service';


@Injectable()
export class UsuarioService {
 
    private baseUrlService:string = '';

    constructor(private http: HttpClient,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'usuario/';
 
    }
 
    /**CONSULTA TODOS OS USUARIOS CADASTRADOS */
    getUsuarios(){        
        return this.http.get(this.baseUrlService + 'lista');
    }

    /**CONSULTA OS SETORES EXISTENTES*/
    getSetores(){
        return this.http.get(this.baseUrlService + 'listarSetores');
    }
 
    /**ADICIONA UM NOVO USUARIOS */
    addUsuario(usuario: Usuario){
 
      
        return this.http.post(this.baseUrlService + 'cadastrar', usuario);
    }
    /**EXCLUI UM USUARIO */
    excluirUsuario(id:number){
 
        return this.http.delete(this.baseUrlService + 'excluir/' + id);
    }
 
    /**CONSULTA UM USUARIO PELO CÓDIGO */
    getUsuario(id:number){
 
        return this.http.get(this.baseUrlService +'consultar/' +  id);
    }
 
    /**ATUALIZA INFORMAÇÕES DO COMPUTADOR */
    atualizarUsuario(usuario:Usuario){
 
        return this.http.put(this.baseUrlService + 'alterar',usuario);
   
 
    }
}