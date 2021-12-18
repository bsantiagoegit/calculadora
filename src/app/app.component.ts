import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora - Angular (Pildoras Informaticas)';
  //n1: string = "0";
  n1: number = 0;
  n2: number = 0;
  result: number = 0;

  sumar():void{
    //this.result = parseInt(this.n1) + this.n2;
    this.result = this.n1 + this.n2;
  }

  restar():void{
    this.result = this.n1 - this.n2;
  }

  miltiplicar():void{
    this.result = this.n1 * this.n2;
  }

  dividir():void{
    this.result = this.n1 / this.n2;
  }
}
