import { Component, OnInit, ViewChild  } from '@angular/core';
import {Computador , ComputadorService } from '../shared';
import {Router} from '@angular/router';
import {Response} from '../../service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'; 


@Component({
  selector: 'app-editar-computador',
  templateUrl: './editar-computador.component.html',
  styleUrls: ['./editar-computador.component.css']

})
export class EditarComputadorComponent implements OnInit {

  @ViewChild('formComputador' , { static: true }) formComputador: NgForm;

  private computador;
  private setores;
  

  constructor(private computadorService: ComputadorService,
    private router: Router,
    private route: ActivatedRoute){}
  ngOnInit() {
   const id = +this.route.snapshot.params['id'];
   this.computadorService.getComputador(id).subscribe(res => this.computador = res);
   this.computadorService.getSetores().subscribe(res => this.setores = res);
    

 }


 editar(){

   /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
   this.computadorService.atualizarComputador(this.computador).subscribe(response => {

        //PEGA O RESPONSE DO RETORNO DO SERVIÇO
        let res:Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
         E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
         if(res.codigo == 1){
          alert(res.mensagem);
          this.router.navigate(['/computadores/listar']);
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



