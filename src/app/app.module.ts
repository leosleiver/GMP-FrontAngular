import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComputadorModule } from './computadores';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ConfigService} from './service';
import { ComputadorService } from './computadores/shared';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CadastrarSetorComponent } from './setores/cadastrar/cadastrar-setor.component';
import { ListarSetorComponent } from './setores/listar/listar-setor.component';
import { EditarSetorComponent } from './setores/editar/editar-setor.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastrarSetorComponent,
    ListarSetorComponent,
    EditarSetorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComputadorModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [ConfigService,ComputadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
