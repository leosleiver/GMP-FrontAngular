import { Component, OnInit,ViewChild } from '@angular/core';
import {Usuario , UsuarioService} from '../shared';
import { Setor } from '../../setores/shared'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import {Response} from '../../service/response';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
   @ViewChild('formUsuario' , { static: true }) formUsuario: NgForm;
    private setores;
    private titulo:string;
    private usuario:Usuario = new Usuario();
     confirmsenha: string;
 
    constructor(private usuarioService: UsuarioService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {
          
      
    }
 
    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    cadastrar():void {
 
      
 
        /*CHAMA O SERVIÇO PARA ADICIONAR UM NOVO USUARIO */
        this.usuarioService.addUsuario(this.usuario).subscribe(response => {
 
           //PEGA O RESPONSE DO RETORNO DO SERVIÇO
           let res:Response = <Response>response;
 
           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           if(res.codigo == 1){
            alert(res.mensagem);
            this.usuario = new Usuario();
            this.router.navigate(['usuarios/listar']);
           }
           else{
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             
            this.usuario = new Usuario();
            this.router.navigate(['usuarios/listar']);
           }
         },
         (erro) => {   
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
           alert(erro);
         });
 
     }
 
  }