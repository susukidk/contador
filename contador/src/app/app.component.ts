import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tiutlo : string  = 'contador';
  public numero : number = 0; //codigo plano 

  ///********Codigo con clases**********//

  public sumar() : void{
    this.numero += 1;
  }
  public restar() : void{
    this.numero -= 1;
  }

  public contador (valor:number) : void {
    this.numero += valor;
  }
  public base (valor:number) : void {
    this.numero += valor;
 
  }
}
