import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  /**
   * declare :any to accedpt anything
   */
  url:string = 'http://loaine.com'

  urlImage:string = "https://picsum.photos/200/300?grayscale"

  cursoAngular = true

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

/**
 * ES 2015 não precisa declarecer a função com o nome function, pode ser omitido. E tb dispensa ;
 */
  getValor() {
    return 2;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Ow, recebi um clique')
  }

  onkeyUp(event:KeyboardEvent) {
  //console.log((<HTMLInputElement>event.target).value); 
  this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(value) {
    this.valorSalvo = value;
  }

  constructor() { 

  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit() {
  }

}
