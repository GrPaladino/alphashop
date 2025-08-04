import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from 'src/app/core/services/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente : string = "";

  titolo: string = "Benvenuti in Alphashop";
  sottotitolo: string = "Visualizza le offerte del giorno";

  saluti: string = "";
  errore: string = "";


  constructor(private route : ActivatedRoute, private salutiSrv : SalutiDataService) {}

  ngOnInit(): void {

    this.utente = this.route.snapshot.params['userid'];

  }

  getSaluti = () : void => {
    this.salutiSrv.getSaluti(this.utente)
      .subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      });
  };

  private handleResponse(response: object) {
    this.saluti = response.toString();
  }

  private handleError(error: any){
    console.log(error);
    this.errore = error.error.message;
  }
}


