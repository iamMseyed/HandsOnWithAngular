import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-track-by',
  templateUrl: './ng-for-track-by.component.html',
  styleUrls: ['./ng-for-track-by.component.css']
})
export class NgForTrackByComponent {
  public emp:any[]=[
    {empId:101,empName:'Name1',empSal:12345},
    {empId:102,empName:'Name2',empSal:67809},
    {empId:103,empName:'Name3',empSal:34509}
  ];
  public getUpdatedData(){
   this.emp=[
    {empId:101,empName:'Name1',empSal:134545},
    {empId:102,empName:'Name2',empSal:67809},
    {empId:103,empName:'Name3',empSal:34509},
    {empId:104,empName:'updated1',empSal:98706}
   ];
  }
  public trackChanges(index:number){ //this method is used for to update changes only not whole data
    return index; 
  }
}
