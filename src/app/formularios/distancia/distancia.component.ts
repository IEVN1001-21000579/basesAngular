import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit {
  
  formulario!: FormGroup;
  resultado:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      puntoACordenadaX: new FormControl('', Validators.required),
      puntoACordenadaY: new FormControl('', Validators.required),
      puntoBCordenadaX: new FormControl('', Validators.required),
      puntoBCordenadaY: new FormControl('', Validators.required)
    });
  }

  calcularDistancia():void{
    const puntoACordenadaX = this.formulario.get('puntoACordenadaX')?.value;
    const puntoACordenadaY = this.formulario.get('puntoACordenadaY')?.value;
    const puntoBCordenadaX = this.formulario.get('puntoBCordenadaX')?.value;
    const puntoBCordenadaY = this.formulario.get('puntoBCordenadaY')?.value;
    this.resultado = Math.sqrt(Math.pow(puntoBCordenadaX - puntoACordenadaX, 2) + Math.pow(puntoBCordenadaY - puntoACordenadaY, 2));
  }

}
