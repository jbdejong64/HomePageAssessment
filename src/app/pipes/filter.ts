// Pipe that filters a list of objects with object.name variable by string

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterCheckboxes'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    
    searchText = searchText.toLowerCase();
        return items.filter( it => {
          return it.name.toLowerCase().includes(searchText);
        });
   } 
}