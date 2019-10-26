import { Component, OnInit,ViewChild } from '@angular/core';
import {Setor , SetorService} from '../shared';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import {Response} from '../../service/response';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../usuarios/shared'


@Component({
  selector: 'app-cadastrar-setor',
  templateUrl: './cadastrar-setor.component.html',
  styleUrls: ['./cadastrar-setor.component.css']
})
export class CadastrarSetorComponent implements OnInit {
   @ViewChild('formSetor' , { static: true }) formSetor: NgForm;
    private setores;
    private titulo:string;
    private setor:Setor = new Setor();
    private usuarios;
 
    constructor(private setorService: SetorService,
                private usuarioService: UsuarioService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {
       this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
      
    }
 
    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    cadastrar():void {
 
      
 
        /*CHAMA O SERVIÇO PARA ADICIONAR UM NOVO COMPUTADOR */
        this.setorService.addSetor(this.setor).subscribe(response => {
 
           //PEGA O RESPONSE DO RETORNO DO SERVIÇO
           let res:Response = <Response>response;
 
           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           if(res.codigo == 1){
            alert(res.mensagem);
            this.setor = new Setor();
            this.router.navigate(['setores/listar']);
           }
           else{
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert("Registo salvo com sucesso!");
            this.setor = new Setor();
            this.router.navigate(['setores/listar']);
           }
         },
         (erro) => {   
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
            alert(erro);
         });
 
     }
 
  }