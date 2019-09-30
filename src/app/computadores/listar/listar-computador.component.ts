import { Component, OnInit } from '@angular/core';
import {Computador , ComputadorService } from '../shared';
import {Router} from '@angular/router';
import {Response} from '../../service';



@Component({
  selector: 'app-listar-computador',
  templateUrl: './listar-computador.component.html',
  styleUrls: ['./listar-computador.component.css']
})
export class ListarComputadorComponent implements OnInit {
 private computadores;
    private titulo:string;
    private computador : Computador = new Computador();
 
    constructor(private computadorService: ComputadorService,
                private router: Router){}
 
    ngOnInit() {
 
     
 
      /*CHAMA O SERVIÇO E RETORNA TODOS OS COMPUTADORES CADASTRADOS */
      this.computadorService.getComputadores().subscribe(res => this.computadores = <any> res);
    }
 
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR
     * LINHA DA TABELA*/
    excluir(codigo:number, index:number):void {
 
      if(confirm("Deseja realmente excluir esse registro?")){
 
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.computadorService.excluirComputador(codigo).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVIÇO */
              let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){  
                alert(res.mensagem);
                this.computadores.splice(index,1);
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
 
      this.router.navigate(['/editar-computador',codigo]);
 
    }


}
