import {Component} from '@angular/core';

@Component({
  selector: 'triangulo-component',
  templateUrl: 'triangulo.component.html'
})
export class TrinaguloComponent{
  altura: number= 0; //atributos
  base: number = 0;
  resultado: string;

  calcular(): void {
    let area = Number(this.base)*Number(this.altura)/ 2; // let define uma variável
    this.resultado = 'a área é:'+ area;
  }
}
