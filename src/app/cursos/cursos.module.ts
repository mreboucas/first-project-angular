import { NgModule } from '@angular/core';

//base para todas as diretivas do angular
import { CommonModule } from '@angular/common';

//componente que é injetado dentro do módulo
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalheComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
