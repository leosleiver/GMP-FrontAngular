import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


 
import {Setor} from './';
import {ConfigService} from '../../service';


@Injectable()
export class SetorService {
 
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;
 
    constructor(private http: Http,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'setor/';
 
        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                       
        this.options = new RequestOptions({ headers: this.headers });
    }
 
    /**CONSULTA TODOS OS SETORES CADASTRADOS */
    getSetores(){        
        return this.http.get(this.baseUrlService + 'listar').map(res => res.json());
    }

     
    /**ADICIONA UM NOVO SETOR */
    addSetor(setor: Setor){
 
        return this.http.post(this.baseUrlService + 'cadastrar', JSON.stringify(setor),this.options)
        .map(res => res.json());
    }
    /**EXCLUI UM SETOR */
    excluirSetor(id:number){
 
        return this.http.delete(this.baseUrlService + 'excluir/' + id).map(res => res.json());
    }
 
    /**CONSULTA UM SETOR PELO CÓDIGO */
    getSetor(id:number){
 
        return this.http.get(this.baseUrlService +'consultar/' +  id).map(res => res.json());
    }
 
    /**ATUALIZA INFORMAÇÕES DO SETOR */
    atualizarSetor(setor:Setor){
 
        return this.http.put(this.baseUrlService + 'atualizar', JSON.stringify(setor),this.options)
        .map(res => res.json());
   
 
    }
}