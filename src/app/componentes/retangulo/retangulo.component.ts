import {Component} from '@angular/core';

@Component({
  selector: 'retangulo-component',
  templateUrl: 'retangulo.component.html'
})
export class RetanguloComponent{
  altura: number; //atributos
  base: number;
  resultado: string;

  calcular(): void {
    let area = Number(this.base)*Number(this.altura); // let define uma variável
    this.resultado = 'a área é:'+ area;
  }
}
