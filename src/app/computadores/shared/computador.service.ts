import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


 
import {Computador} from './';
import {ConfigService} from '../../service';


@Injectable()
export class ComputadorService {
 
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;
 
    constructor(private http: Http,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'computador/';
 
        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                       
        this.options = new RequestOptions({ headers: this.headers });
    }
 
    /**CONSULTA TODOS OS COMPUTADORES CADASTRADOS */
    getComputadores(){        
        return this.http.get(this.baseUrlService + 'listar').map(res => res.json());
    }
 
    /**ADICIONA UM NOVO COMPUTADOR */
    addComputador(computador: Computador){
 
        return this.http.post(this.baseUrlService + 'cadastrar', JSON.stringify(computador),this.options)
        .map(res => res.json());
    }
    /**EXCLUI UM COMPUTADOR */
    excluirComputador(codigo:number){
 
        return this.http.delete(this.baseUrlService + 'excluir' + codigo).map(res => res.json());
    }
 
    /**CONSULTA UM COMPUTADOR PELO CÓDIGO */
    getComputador(codigo:number){
 
        return this.http.get(this.baseUrlService +'consultar' +  codigo).map(res => res.json());
    }
 
    /**ATUALIZA INFORMAÇÕES DO COMPUTADOR */
    atualizarComputador(computador:Computador){
 
        return this.http.put(this.baseUrlService + 'editar', JSON.stringify(computador),this.options)
        .map(res => res.json());
   
 
}
}