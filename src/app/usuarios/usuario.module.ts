import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './listar';
import { CadastrarUsuarioComponent } from './cadastrar';
import { EditarUsuarioComponent } from './editar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioService } from './shared';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [ListarUsuarioComponent,CadastrarUsuarioComponent,EditarUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  providers :[
  UsuarioService
  ]
})
export class UsuarioModule { }
