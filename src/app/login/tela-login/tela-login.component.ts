import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared';
import { Router } from '@angular/router';
import {Response} from '../../service';
import { Usuario } from '../../usuarios/shared';


@Component({
	selector: 'app-tela-login',
	templateUrl: './tela-login.component.html',
	styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

	private usuario: Usuario = new Usuario();
 

	constructor(private loginService: LoginService,
		private router: Router)  { }

	ngOnInit() {
	}


	fazerLogin(){

      this.loginService.verificarUsuario(this.usuario).subscribe(response => {

        //PEGA O RESPONSE DO RETORNO DO SERVIÇO
        let res:Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
         E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
         if(res.codigo == 1){
          alert(res.mensagem);
          this.router.navigate(['/usuarios/listar']);
        }
        else{
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
          this.router.navigate(['/usuarios/listar']);
        }
      },
      (erro) => {                    
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
         EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
         alert(erro);
       });

		
	}

}

