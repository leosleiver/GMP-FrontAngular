import { Component, OnInit } from '@angular/core';
import {Setor , SetorService } from '../shared';
import {Router} from '@angular/router';
import {Response} from '../../service';


@Component({
  selector: 'app-listar-setor',
  templateUrl: './listar-setor.component.html',
  styleUrls: ['./listar-setor.component.css']
})
export class ListarSetorComponent implements OnInit {
 private setores;
    private titulo:string;
    private setor;
 
    constructor(private setorService: SetorService,
                private router: Router){}
 
    ngOnInit() {
 
     
      /*CHAMA O SERVIÇO E RETORNA TODOS OS SETORES CADASTRADOS */
      this.setorService.getSetores().subscribe(res => this.setores = res);
    }
 
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR
     * LINHA DA TABELA*/
    excluir(codigo:number, index:number):void {
 
      if(confirm("Deseja realmente excluir esse registro?")){
 
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.setorService.excluirSetor(codigo).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVIÇO */
              let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){  
                alert(res.mensagem);
                this.setores.splice(index,1);
                location.reload();

              }
              else{
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              }
          },
          (erro) => {                    
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          }); 

      }
 
    }
 
    editar(codigo:number):void{
 
      this.router.navigate(['/editar-setor',codigo]);
 
    }


}

