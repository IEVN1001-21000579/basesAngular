import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';

  duplicarNumero(x:number):number{
    return x*2;
  }

  alumno={
    matricula:21000579,
    nombre:'César',
    fechaInscrito:new Date(),
    pago:2220
  };
}
