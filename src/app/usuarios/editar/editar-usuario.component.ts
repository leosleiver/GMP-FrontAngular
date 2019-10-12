import { Component, OnInit, ViewChild  } from '@angular/core';
import {Usuario , UsuarioService } from '../shared';
import {Router} from '@angular/router';
import {Response} from '../../service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'; 


@Component({
   selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']

})
export class EditarUsuarioComponent implements OnInit {

  @ViewChild('formUsuario' , { static: true }) formUsuario: NgForm;

  private usuario;

  

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute){}
  ngOnInit() {
   const id = +this.route.snapshot.params['id'];
   this.usuarioService.getUsuario(id).subscribe(res => this.usuario = res);
   
    

 }


 editar(){

   /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
   this.usuarioService.atualizarUsuario(this.usuario).subscribe(response => {

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




