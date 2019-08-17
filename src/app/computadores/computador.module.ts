import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComputadorService } from './shared';
import { ListarComputadorComponent } from './listar';
import { CadastrarComputadorComponent } from './cadastrar';
import { EditarComputadorComponent } from './editar';



@NgModule({
  declarations: [ListarComputadorComponent, CadastrarComputadorComponent, EditarComputadorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers :[
  ComputadorService
  ]
})
export class ComputadorModule { }
