import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../app/product-list/product';

@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {
  transform(value: IProduct[] , term: string): any[] {
    return value.filter((x: IProduct) => x.productName.toLowerCase().startsWith(term.toLowerCase()) || x.productCode.toLowerCase().startsWith(term.toLowerCase()))
  }
}
