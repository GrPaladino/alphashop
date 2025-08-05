import { HttpClient } from '@angular/common/http';
import { IArticoli } from 'src/app/shared/models/Articoli';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  server : string = "localhost";
  port : string = "5051";

  constructor(private httpClient : HttpClient) { }

  getArticoliByDesc = (descrizione : string) => {
    return this.httpClient.get<IArticoli[]>(`http://${this.server}:${this.port}/api/articoli/cerca/descrizione/${descrizione}`) //ALT + 0096 | ALT GR + '
    .pipe(
      map(response => {
        response.forEach(item => item.status = this.getDesStatoArt(item.status))
        return response;
      })
    );
  }

  getArticoliByCode = (codart: string) => {
    return this.httpClient.get<IArticoli>(`http://${this.server}:${this.port}/api/articoli/cerca/codice/${codart}`)
    .pipe(
      map(response => {
        response.status = this.getDesStatoArt(response.status)
        return response;
      })
    );
  }

  getArticoliByEan = (barcode: string) => {
    return this.httpClient.get<IArticoli>(`http://${this.server}:${this.port}/api/articoli/cerca/barcode/${barcode}`)
    .pipe(
      map(response => {
        response.status = this.getDesStatoArt(response.status)
        return response;
      })
    );
  }

  getDesStatoArt = (idStato: string) : string => {

    if (idStato === '1')
      return 'Attivo'
    else if (idStato === '2')
      return 'Sospeso'
    else
      return 'Eliminato'
  }

  delArtByCodArt = (codArt: string) => {
    return this.httpClient.delete(`http://${this.server}:${this.port}/api/articoli/elimina/${codArt}`);
  }
}
