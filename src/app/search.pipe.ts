import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string, keyword: string): boolean {

    if(value.indexOf(keyword) != -1){
      return true;
    }
    return false;
  }

}
