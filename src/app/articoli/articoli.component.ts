import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli = [
    {codart: '172553346', descrizione: 'BARILLA FARINA 1 KG', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.29},
    {codart: '172234388', descrizione: 'BARILLA PASTA', um: 'PZ', pzcart: 30, peso: 0.5, prezzo: 1.09},
    {codart: '173456668', descrizione: 'FINDUS FIOR DI NASELLO 300GR', um: 'PZ', pzcart: 8, peso: 0.3, prezzo: 3.59},
    {codart: '172567588', descrizione: 'FINDUS CROCCOLE 400GR', um: 'PZ', pzcart: 12, peso: 0.4, prezzo: 5.21}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
