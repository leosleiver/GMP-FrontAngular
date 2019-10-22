import { Component } from '@angular/core';
import { LoginService } from './login/shared/';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

 mostrarMenu: boolean = false;

constructor(private loginService: LoginService,
            private route: Router){

}

 ngOnInit( ) {

 	this.loginService.mostrarMenuEmitter.subscribe(
        mostrar => this.mostrarMenu = mostrar
 		);
 }

fazerLogout(){
    this.loginService.setFalseforLogout();
    this.route.navigate(['login']);
       
 }


}


