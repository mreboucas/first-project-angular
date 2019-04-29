import { Injectable } from '@angular/core';

/**
 * Essa classe de serviço pode ser injetada em outra classe por meio dessa anotação.
 */
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private show:boolean = false;
  cursos:string[];

  constructor() { }

  getCursos() {
    return ['Java', 'Ext Js','Angular','Phyton'];
  }

  isToShow() {

    let cursoArray = this.getCursos();
    for (var curso of cursoArray) {
      if (curso.toLowerCase().startsWith('p')) {
        this.show = true;
      }
    }

    return this.show;
  }
}