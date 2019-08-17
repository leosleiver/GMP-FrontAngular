import { Component, OnInit,ViewChild } from '@angular/core';
import {Computador , ComputadorService } from '../shared';
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
  
    private titulo:string;
    private computador:Computador = new Computador();
 
    constructor(private computadorService: ComputadorService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {
 
      this.activatedRoute.params.subscribe(parametro=>{
 
        if(parametro["codigo"] == undefined){
 
          this.titulo = "Novo Cadastro de Conputador";
        }
        else{
 
          this.titulo = "Editar Cadastro de Computador";
          this.computadorService.getComputador(Number(parametro["id"])).subscribe(res => this.computador = res);
        }
 
 
      });      
    }
 
    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    cadastrar():void {
 
      /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      if(this.computador.id == undefined){
 
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
      else{
 
        /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
        this.computadorService.atualizarComputador(this.computador).subscribe(response => {
 
        //PEGA O RESPONSE DO RETORNO DO SERVIÇO
        let res:Response = <Response>response;
 
         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        if(res.codigo == 1){
          alert(res.mensagem);
          this.router.navigate(['/computador/consultar']);
        }
         else{
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
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
 
  }