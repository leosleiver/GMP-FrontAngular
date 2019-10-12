import { Component, OnInit } from '@angular/core';
import { Usuario, LoginService } from '../shared';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

   private usuario: Usuario = new Usuario();

  constructor(private loginService: LoginService)  { }

  ngOnInit() {
  }


fazerLogin(){
 this.loginService.fazerLogin(this.usuario);

}

}
