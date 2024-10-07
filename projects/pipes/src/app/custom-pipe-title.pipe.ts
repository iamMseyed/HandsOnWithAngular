import { Pipe, PipeTransform } from '@angular/core';  

@Pipe({ // created with @pipe() decorator
  name: 'customPipeTitle'
})
export class CustomPipeTitlePipe implements PipeTransform { 
  // implements PipeTransform interface, thus we need to work with transform()
  transform(name:string,gender:string):string { 
    if(gender.toLowerCase()=='male'){
      return "Mr. " +name;
    }
    else{
      return "Mrs. " +name;
    }
  }
}