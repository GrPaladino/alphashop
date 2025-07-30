import { Component, OnInit } from '@angular/core';
import { IArticoli } from '../models/articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli: IArticoli[] = [
    {codart: '172553346', descrizione: 'BARILLA FARINA 1 KG', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.29, active: true, data: new Date()},
    {codart: '172234388', descrizione: 'BARILLA PASTA', um: 'PZ', pzcart: 30, peso: 0.5, prezzo: 1.09, active: true, data: new Date()},
    {codart: '173456668', descrizione: 'FINDUS FIOR DI NASELLO 300GR', um: 'PZ', pzcart: 8, peso: 0.3, prezzo: 3.59, active: true, data: new Date()},
    {codart: '172567588', descrizione: 'FINDUS CROCCOLE 400GR', um: 'PZ', pzcart: 12, peso: 0.4, prezzo: 5.21, active: true, data: new Date()}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
