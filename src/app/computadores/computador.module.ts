import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComputadorService } from './shared';
import { ListarComputadorComponent } from './listar';
import { CadastrarComputadorComponent } from './cadastrar';
import { EditarComputadorComponent } from './editar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [ListarComputadorComponent, CadastrarComputadorComponent, EditarComputadorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  providers :[
  ComputadorService
  ]
})
export class ComputadorModule { }
