import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
  if(arg === '') return value;
   const resultDatas = [];

     for(const data of value) {
     if(data.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
       resultDatas.push(data);
     }

   }

   return resultDatas
  }

}
