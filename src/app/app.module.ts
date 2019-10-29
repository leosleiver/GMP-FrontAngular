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
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { AuthGuard } from './guards';
import { InicioComponent } from './inicio/inicio.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsuarioModule } from './usuarios';
import { SetorModule } from './setores';




@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    InicioComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng2SearchPipeModule,
    SetorModule,
    ComputadorModule,
    UsuarioModule,
  ],
  providers: [ConfigService,ComputadorService,SetorService,UsuarioService,LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
