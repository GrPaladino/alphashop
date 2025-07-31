import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userId: string, password: string): boolean  =>{
    let retVal =  (userId === 'Graziano' && password === '123') ? true : false;

    if (retVal) {
      sessionStorage.setItem("Utente", userId);
    }
    return retVal;
  }

  loggedUser = (): string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : '';

  isLogged = (): boolean => (sessionStorage.getItem("Utente")) ? true : false;

  clearUser = (): void => (sessionStorage.removeItem("Utente"));

  clearAll = (): void => (sessionStorage.clear());
}
