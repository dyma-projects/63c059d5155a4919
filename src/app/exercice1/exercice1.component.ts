import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})

export class Exercice1Component {

  a:string;
  b:string;
  c:string = '';
  constructor(){
    this.a = 'interpolation';
    this.b = 'attribut';
  }
  majuscule(event: string){
    this.c = event.toUpperCase();
  }
}
