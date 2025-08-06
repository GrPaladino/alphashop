import { Component, OnInit } from '@angular/core';
import { IArticoli, ICat, IIva } from 'src/app/shared/models/Articoli';

import { ActivatedRoute } from '@angular/router';
import { ArticoliService } from 'src/app/core/services/data/articoli.service';
import { IArticolo } from 'src/app/shared/models/Articolo';
import { ApiMsg } from 'src/app/shared/models/ApiMsg';

@Component({
  selector: 'app-gestart',
  templateUrl: './gestart.component.html',
  styleUrls: ['./gestart.component.css']
})
export class GestartComponent  implements OnInit {

title : string = "Modifica Articoli";
codart: string = '';
articolo: IArticoli  = {
  codart: '',
  descrizione: '',
  um: '',
  pzcart: 0,
  peso: 0,
  prezzo: 0,
  data: new Date(),
  imageUrl: '',
  status: '',
  idStatoArt: "1",
  iva: {idIva: 0, descrizione: '', aliquota: 0 },
  famAssort: {id : -1, descrizione: ''},
  barcode : []
};


constructor(
  private route: ActivatedRoute,
  private articoliService: ArticoliService) { }

  Iva: IIva[] = [];
  Cat: ICat[] = [];
  apiMsg!: ApiMsg;
  conferma: string = '';

  ngOnInit(): void {
    this.codart =  this.route.snapshot.params['codart'];
    console.log("Selezionato articolo " + this.codart);

    this.articoliService.getArticoliByCode(this.codart).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });

    this.articoliService.getIva().subscribe(
      response => {
        this.Iva = response;
        console.log(response);
      }
    )

    this.articoliService.getCat().subscribe(
      response => {
        this.Cat = response;
        console.log(response);
      }
    )

  }

  handleResponse(response : any) {
    this.articolo = response;
    console.log(this.articolo);
  }

  handleError(error: any) {
    console.log(error);
  }

  salva = () => {
    console.log(this.articolo);
    this.conferma = '';

    var articolo = this.transformData(this.articolo);

    this.articoliService.updArticolo(articolo).subscribe(
      response => {
        this.apiMsg = response;
        this.conferma = this.apiMsg.message;
      }
    )
  }

  transformData(articoloDto: IArticoli): IArticolo {

    return {
      codArt: articoloDto.codart,
      descrizione: articoloDto.descrizione,
      um: articoloDto.um,
      pzCart: articoloDto.pzcart,
      pesoNetto: articoloDto.peso,
      dataCreaz: new Date(),
      idStatoArt: articoloDto.idStatoArt,
      ingredienti: {codArt : '', info: ''},
      iva: {idIva: articoloDto.iva.idIva, descrizione: articoloDto.iva.descrizione, aliquota: articoloDto.iva.aliquota },
      famAssort: {id : articoloDto.famAssort.id, descrizione: articoloDto.famAssort.descrizione},
      barcode : articoloDto.barcode
    };
  }

}
