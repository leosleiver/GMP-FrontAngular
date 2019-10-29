import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SetorService } from './shared';
import { ListarSetorComponent } from './listar';
import { CadastrarSetorComponent } from './cadastrar';
import { EditarSetorComponent } from './editar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [ListarSetorComponent, CadastrarSetorComponent, EditarSetorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  providers :[
  SetorService
  ]
})
export class SetorModule { }
