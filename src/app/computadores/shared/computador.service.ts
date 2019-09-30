import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpHeaders} from '@angular/common/http';
//import { HttpRequestOptions } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


 
import {Computador} from './';
import {ConfigService} from '../../service';


@Injectable()
export class ComputadorService {
 
    private baseUrlService:string = '';
   // private headers:HttpHeaders;
   // private options:HttpRequestOptions;
 
    constructor(private http: HttpClient,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'computador/';
 
        /*ADICIONANDO O JSON NO HEADER */
    //    this.headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });                       
    //   this.options = new HttpRequestOptions({ headers: this.headers });
    }
 
    /**CONSULTA TODOS OS COMPUTADORES CADASTRADOS */
    getComputadores(){        
        return this.http.get(this.baseUrlService + 'listar');
    }

    /**CONSULTA OS SETORES EXISTENTES*/
    getSetores(){
        return this.http.get(this.baseUrlService + 'listarSetores');
    }
 
    /**ADICIONA UM NOVO COMPUTADOR */
    addComputador(computador: Computador){
 
      
        return this.http.post(this.baseUrlService + 'cadastrar', computador);
    }
    /**EXCLUI UM COMPUTADOR */
    excluirComputador(id:number){
 
        return this.http.delete(this.baseUrlService + 'excluir/' + id);
    }
 
    /**CONSULTA UM COMPUTADOR PELO CÓDIGO */
    getComputador(id:number){
 
        return this.http.get(this.baseUrlService +'consultar/' +  id);
    }
 
    /**ATUALIZA INFORMAÇÕES DO COMPUTADOR */
    atualizarComputador(computador:Computador){
 
        return this.http.put(this.baseUrlService + 'atualizar',computador);
   
 
    }
}