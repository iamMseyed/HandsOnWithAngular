import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {
  public emps:any[]=[
    {empId:'emp1', empName:"name1",gender:'Male'},
    {empId:'emp2', empName:"name2",gender:'female'},
    {empId:'emp3', empName:"name3",gender:'Male'},
    {empId:'emp4', empName:"name4",gender:'Male'},
  ];
}