import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class FilterPipe implements PipeTransform {
    public transform(value, keys: string, term: string) {

    if (!term) return value;
        return (value || []).filter((recipes) => keys.split(',').some(key => recipes.hasOwnProperty(key) && new RegExp(term, 'gi').test(recipes[key])));
    }
}