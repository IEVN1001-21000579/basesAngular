import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit {
  formulario!: FormGroup;
  nombre:string = '';
  edad:number = 0;
  signo:string = '';
  imgSigno:string = '';
  constructor() { }

  
  imgRata:string = 'https://www.elmagoarcano.com/wp-content/uploads/2017/10/1-rata-zodiaco-chino-1.jpg';
  imgBuey:string = 'https://www.elmagoarcano.com/wp-content/uploads/2017/10/2-buey-zodiaco-chino-1.jpg';
  imgTigre:string = 'https://www.elmagoarcano.com/wp-content/uploads/2017/10/3-tigre-zodiaco-chino-1.jpg';
  imgConejo:string='https://www.elmagoarcano.com/wp-content/uploads';
  imgDragon:string='https://www.elmagoarcano.com/wp-content/uploads/2017/10/5-dragon-zodiaco-chino-1.jpg';
  imgSerpiente:string='https://www.elmagoarcano.com/wp-content/uploads/2017/10/6-serpiente-zodiaco-chino-1.jpg';
  imgCaballo:string='https://www.elmagoarcano.com/wp-content/uploads/2017/10/7-caballo-zodiaco-chino-1.jpg';    imgCabra:string='https://www.elmagoarcano.com/wp-content/uploads/2017/10/8-cabra-zodiaco-chino-1.jpg';
  imgMono:string='https://www.elmagoarcano.com/wp-content/uploads/2017/10/9-mono-zodiaco-chino-1.jpg';
  imgGallo:string='https://www.elmagoarcano.com/wp-content/uploads/2017/10/10-gallo-zodiaco-chino-1.jpg';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      name: new FormControl('', Validators.required),
      Apaterno: new FormControl('', Validators.required),
      Amaterno: new FormControl('', Validators.required),
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      ano: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required)
    });
  }

  imprimir():void{
    //Sumar nombre
    let name = this.formulario.get('name')?.value;
    let Apaterno = this.formulario.get('Apaterno')?.value;
    let Amaterno = this.formulario.get('Amaterno')?.value;
    this.nombre = name + ' ' + Apaterno + ' ' + Amaterno;

    //calcular edad
    const dia = this.formulario.get('dia')?.value;
    const mes = this.formulario.get('mes')?.value;
    const ano = this.formulario.get('ano')?.value;
  
    if (dia && mes && ano) {
      const fechaNacimiento = new Date(ano, mes - 1, dia);
      const fechaActual = new Date();
      let age = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
      const mesDiferencia = fechaActual.getMonth() - fechaNacimiento.getMonth();
      
      if (mesDiferencia < 0 || (mesDiferencia === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        age--;
      }
      
      this.edad = age;

      //calcular signo
      //this.signo(): string {

      //}

      //calcular signo
      if (ano == 1924 || ano == 1936 || ano == 1948 || ano == 1960 || ano == 1972 || ano == 1984 || ano == 1996 || ano == 2008 ){
        this.signo = 'Rata';
        this.imgSigno = this.imgRata;
      }
      if (ano == 1925 || ano == 1937 || ano == 1949 || ano == 1961 || ano == 1973 || ano == 1985 || ano == 1997 || ano == 2009 ){
        this.signo = 'Buey';
        this.imgSigno = this.imgBuey;
      }
      if (ano == 1926 || ano == 1938 || ano == 1950 || ano == 1962 || ano == 1974 || ano == 1986 || ano == 1998 || ano == 2010 ){
        this.signo = 'Tigre';
        this.imgSigno = this.imgTigre;
      }
      if (ano == 1927 || ano == 1939 || ano == 1951 || ano == 1963 || ano == 1975 || ano == 1987 || ano == 1999 || ano == 2011 ){
        this.signo = 'Conejo';
        this.imgSigno = this.imgConejo;
      }
      if (ano == 1928 || ano == 1940 || ano == 1952 || ano == 1964 || ano == 1976 || ano == 1988 || ano == 2000 || ano == 2012 ){
        this.signo = 'Dragon';
        this.imgSigno = this.imgDragon;
      }
      if (ano == 1929 || ano == 1941 || ano == 1953 || ano == 1965 || ano == 1977 || ano == 1989 || ano == 2001 || ano == 2013 ){
        this.signo = 'Serpiente';
        this.imgSigno = this.imgSerpiente;
      }
      if (ano == 1930 || ano == 1942 || ano == 1954 || ano == 1966 || ano == 1978 || ano == 1990 || ano == 2002 || ano == 2014 ){
        this.signo = 'Caballo';
        this.imgSigno = this.imgCaballo;
      }
      if (ano == 1931 || ano == 1943 || ano == 1955 || ano == 1967 || ano == 1979 || ano == 1991 || ano == 2003 || ano == 2015 ){
        this.signo = 'Cabra';
        this.imgSigno = this.imgCabra;
      }
      if (ano == 1932 || ano == 1944 || ano == 1956 || ano == 1968 || ano == 1980 || ano == 1992 || ano == 2004 || ano == 2016 ){
        this.signo = 'Mono';
        this.imgSigno = this.imgMono;
      }
      if (ano == 1933 || ano == 1945 || ano == 1957 || ano == 1969 || ano == 1981 || ano == 1993 || ano == 2005 || ano == 2017 ){
        this.signo = 'Gallo';
        this.imgSigno = this.imgGallo;
      }
    }
  }
}
