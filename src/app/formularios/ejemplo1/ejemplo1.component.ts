import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnInit {
  
  formulario!: FormGroup;
  resultado:number = 0;
  resultadoDistancia:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl('', Validators.required),
      numero2: new FormControl('', Validators.required),
      puntoACordenadaX: new FormControl('', Validators.required),
      puntoACordenadaY: new FormControl('', Validators.required),
      puntoBCordenadaX: new FormControl('', Validators.required),
      puntoBCordenadaY: new FormControl('', Validators.required)
    });
  }
  sumarNumeros():void{
    const numero1 = this.formulario.get('numero1')?.value;
    const numero2 = this.formulario.get('numero2')?.value;
    this.resultado = numero1 + numero2;
  }

  calcularDistancia():void{
    const puntoACordenadaX = this.formulario.get('puntoACordenadaX')?.value;
    const puntoACordenadaY = this.formulario.get('puntoACordenadaY')?.value;
    const puntoBCordenadaX = this.formulario.get('puntoBCordenadaX')?.value;
    const puntoBCordenadaY = this.formulario.get('puntoBCordenadaY')?.value;
    this.resultadoDistancia = Math.sqrt(Math.pow(puntoBCordenadaX - puntoACordenadaX, 2) + Math.pow(puntoBCordenadaY - puntoACordenadaY, 2));
  }

}
