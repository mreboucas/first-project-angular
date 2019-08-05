import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  nomePortal:string;
  cursos:string[];
  show:boolean;

  constructor(private cursosService: CursosService) { 

    this.nomePortal = "https://loiane.training/";
    //this.cursos = ['Java', 'Ext Js','Angular'];
    /**
     * Leva para o construtor da classe CursosComponent para fucionar com a injeção de penpendência
     */
    //var service = new CursosService();

    this.cursos = this.cursosService.getCursos();
  
    this.show = this.cursosService.isToShow();

  }

  ngOnInit() {
  }

}