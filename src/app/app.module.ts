import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComputadorModule } from './computadores';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ConfigService} from './service';
import { ComputadorService } from './computadores/shared';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComputadorModule,
    FormsModule,
    HttpModule
  ],
  providers: [ConfigService,ComputadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
