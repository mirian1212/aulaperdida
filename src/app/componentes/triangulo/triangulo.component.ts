import {Component} from '@angular/core';

@Component({
  selector: 'triangulo-component',
  templateUrl: 'triangulo.component.html'
})
export class TrianguloComponent{
  altura: number; //atributos
  base: number;
  resultado: string;

  calcular(): void {
    let area = Number(this.base)*Number(this.altura)/ 2; // let define uma variável
    this.resultado = 'a área é:'+ area;
  }
}
