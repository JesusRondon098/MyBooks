import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: Book): string {
    return `Ref-${value.id_book}`
  }

}
