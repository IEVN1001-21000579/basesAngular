import { Component } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product-ist',
  templateUrl: './product.ist.component.html',
  styleUrl: './product.ist.component.css'
})
export class ProductIstComponent {

  imageWidth:number=180;
  imageMargin:number=8;
  muestraImg:boolean=true;
  listFilter:string='';
  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos:Products[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion":"2 puertas",
      "Year":"2024",
      "Precio":12000,
      "Color":"Blanco",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.8LYqFD_JM_A03E6M3czP1gAAAA?rs=1&pid=ImgDetMain",
      "Marca":"si"
    },
    {
      "ProductoId":2,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Year":"2025",
      "Precio":120000,
      "Color":"Gris",
      "ImagenUrl":"https://i.ytimg.com/vi/4VxiZx4OIuY/maxresdefault.jpg",
      "Marca":"si"
    },
    {
      "ProductoId":3,
      "Modelo":"Bocho",
      "Descripcion":"1 puerta",
      "Year":"2000",
      "Precio":55,
      "Color":"Caca",
      "ImagenUrl":"https://i.kinja-img.com/gawker-media/image/upload/s--zKXRyv-o--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/18nbgrzzzl56cjpg.jpg",
      "Marca":"si"
    }
  ]
}
