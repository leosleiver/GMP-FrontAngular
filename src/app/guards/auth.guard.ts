import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot  } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from './../login/shared';
import { Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private loginService: LoginService,
	            private router: Router   ) { }

	canActivate(route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot) : Observable<boolean> | boolean
	{
	 if(this.loginService.usuarioEstaAutenticado()){
	 	return true;
	 } else {

	 	this.router.navigate(['login']);
	 	return false;
	 }
	} 
	
	
}
