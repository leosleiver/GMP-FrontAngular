import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SetorService } from './shared';
import { ListarSetorComponent } from './listar';
import { CadastrarSetorComponent } from './cadastrar';
import { EditarSetorComponent } from './editar';



@NgModule({
  declarations: [ListarSetorComponent, CadastrarSetorComponent, EditarSetorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers :[
  SetorService
  ]
})
export class SetorModule { }
