import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComputadorModule } from './computadores';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ConfigService} from './service';
import { ComputadorService } from './computadores/shared';
import { SetorService } from './setores/shared';
import { UsuarioService } from './usuarios/shared';
import { LoginService } from './login/shared';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CadastrarSetorComponent } from './setores/cadastrar/cadastrar-setor.component';
import { ListarSetorComponent } from './setores/listar/listar-setor.component';
import { EditarSetorComponent } from './setores/editar/editar-setor.component';
import { CadastrarUsuarioComponent } from './usuarios/cadastrar/cadastrar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar/editar-usuario.component';
import { ListarUsuarioComponent } from './usuarios/listar/listar-usuario.component';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { AuthGuard } from './guards';





@NgModule({
  declarations: [
    AppComponent,
    CadastrarSetorComponent,
    ListarSetorComponent,
    EditarSetorComponent,
    CadastrarUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent,
    TelaLoginComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComputadorModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [ConfigService,ComputadorService,SetorService,UsuarioService,LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
