import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = '';
  password: string = '';

  autenticato: boolean = true;
  errorMsg: string = 'Spiacente, la userid o la password sono errati!';

  titolo: string = 'Accesso & Autenticazione';
  sottotitolo: string = 'Inserisci le tue credenziali per accedere al sistema';

  constructor(private route: Router, private BasicAuth: AuthappService) {}

  ngOnInit(): void {}

  authenticate(): void {
    if (this.BasicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['/welcome', this.userId]);
      this.autenticato = true;
    } else {
      // this.route.navigate(['/error']);
      this.autenticato = false;
    }
  }
}
