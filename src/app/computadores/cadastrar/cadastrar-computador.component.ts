import { Component, OnInit,ViewChild } from '@angular/core';
import {Computador , ComputadorService} from '../shared';
import { Setor } from '../../setores/shared'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import {Response} from '../../service/response';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastrar-computador',
  templateUrl: './cadastrar-computador.component.html',
  styleUrls: ['./cadastrar-computador.component.css']
})
export class CadastrarComputadorComponent implements OnInit {
   @ViewChild('formComputador' , { static: true }) formComputador: NgForm;
    private setores: Setor[] = new Array();
    private titulo:string;
    private computador:Computador = new Computador();
 
    constructor(private computadorService: ComputadorService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {
           this.computadorService.getSetores().subscribe(res => this.setores = res);
      
    }
 
    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    cadastrar():void {
 
      
 
        /*CHAMA O SERVIÇO PARA ADICIONAR UM NOVO COMPUTADOR */
        this.computadorService.addComputador(this.computador).subscribe(response => {
 
           //PEGA O RESPONSE DO RETORNO DO SERVIÇO
           let res:Response = <Response>response;
 
           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           if(res.codigo == 1){
            alert(res.mensagem);
            this.computador = new Computador();
           }
           else{
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert(res.mensagem);
           }
         },
         (erro) => {   
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
            alert(erro);
         });
 
     }
 
  }