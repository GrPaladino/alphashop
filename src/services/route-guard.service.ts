import { inject, Injectable } from '@angular/core';
import { AuthappService } from './authapp.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private BasicAuth: AuthappService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.BasicAuth.isLogged()) {
      console.log('Accesso non consentito');
      this.router.navigate(['/login']);
      return false;
    } else {
       return true;
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(RouteGuardService).canActivate(next, state);
}