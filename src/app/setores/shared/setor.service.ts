import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpHeaders} from '@angular/common/http';
//import { HttpRequestOptions } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


 
import {Setor} from './';
import {ConfigService} from '../../service';


@Injectable()
export class SetorService {

    private baseUrlService:string = '';
   // private headers:HttpHeaders;
   // private options:HttpRequestOptions;
 
    constructor(private http: HttpClient,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'setor/';
 
        /*ADICIONANDO O JSON NO HEADER */
    //    this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                       
    //   this.options = new RequestOptions({ headers: this.headers });
    }
 
    /**CONSULTA TODOS OS SETORES CADASTRADOS */
    getSetores(){        
        return this.http.get(this.baseUrlService + 'listar');
    }

     
    /**ADICIONA UM NOVO SETOR */
    addSetor(setor: Setor){
 
        return this.http.post(this.baseUrlService + 'cadastrar',setor);
    }
    /**EXCLUI UM SETOR */
    excluirSetor(id:number){
 
        return this.http.delete(this.baseUrlService + 'excluir/' + id);
    }
 
    /**CONSULTA UM SETOR PELO CÓDIGO */
    getSetor(id:number){
 
        return this.http.get(this.baseUrlService +'consultar/' +  id);
    }
 
    /**ATUALIZA INFORMAÇÕES DO SETOR */
    atualizarSetor(setor:Setor){
 
        return this.http.put(this.baseUrlService + 'atualizar',setor);
   
 
    }
}