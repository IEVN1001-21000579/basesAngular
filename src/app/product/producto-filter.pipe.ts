import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './products';

@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {

  transform(value: Products[], args: string): Products[] {
    let filter: string = args ? args.toLocaleLowerCase() : '';
    return filter? value.filter((producto: Products) =>
      producto.Modelo.toLocaleLowerCase().indexOf(filter) != -1
    ): value;
  }
}
