import { Component, OnInit, ViewChild  } from '@angular/core';
import {Setor , SetorService } from '../shared';
import {Router} from '@angular/router';
import {Response} from '../../service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-editar-setor',
  templateUrl: './editar-setor.component.html',
  styleUrls: ['./editar-setor.component.css']
})
export class EditarSetorComponent implements OnInit {
    
    @ViewChild('formSetor' , { static: true }) formSetor: NgForm;
    
    private setor;
  

 constructor(private setorService: SetorService,
                private router: Router,
                private route: ActivatedRoute){}
  ngOnInit() {
       const id = +this.route.snapshot.params['id'];
       this.setorService.getSetor(id).subscribe(res => this.setor = res);
      
      
  }
  
      
      editar(){

      	/*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
        this.setorService.atualizarSetor(this.setor).subscribe(response => {
 
        //PEGA O RESPONSE DO RETORNO DO SERVIÇO
        let res:Response = <Response>response;
 
         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        if(res.codigo == 1){
          alert("Registro alterado com sucesso");
          this.router.navigate(['/setores/listar']);
        }
         else{
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
          alert("Registro alterado com sucesso");
           this.router.navigate(['/setores/listar']);
         }
       },
       (erro) => {                    
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
          EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
          alert(erro);
       });
      }
 
    }

       

