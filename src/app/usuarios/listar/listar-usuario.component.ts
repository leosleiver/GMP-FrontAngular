import { Component, OnInit } from '@angular/core';
import {Usuario , UsuarioService } from '../shared';
import {Router} from '@angular/router';
import {Response} from '../../service';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
private usuarios;
  
    private usuario : Usuario = new Usuario();
 
    constructor(private usuarioService: UsuarioService,
                private router: Router){}
 
    ngOnInit() {
 
     
 
      /*CHAMA O SERVIÇO E RETORNA TODOS OS USUARIOS CADASTRADOS */
      this.usuarioService.getUsuarios().subscribe(res => this.usuarios = <any> res);
    }
 
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR
     * LINHA DA TABELA*/
    excluir(codigo:number, index:number):void {
 
      if(confirm("Deseja realmente excluir esse registro?")){
 
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.usuarioService.excluirUsuario(codigo).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVIÇO */
              let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){  
                alert(res.mensagem);
                this.usuarios.splice(index,1);
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
 
      this.router.navigate(['/editar-usuario',codigo]);
 
    }


}
