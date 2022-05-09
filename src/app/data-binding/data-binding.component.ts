import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'http://localhost';
  urlImagem: string = 'http://via.placeholder.com/640x360';
  cursoAngular: boolean = true;

  constructor() { }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

}
