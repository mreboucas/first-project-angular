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
/**
 * ES 2015 não precisa declarecer a função com o nome function, pode ser omitido. E tb dispensa ;
 */
  getValor() {
    return 2;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { 

  }

  ngOnInit() {
  }

}
