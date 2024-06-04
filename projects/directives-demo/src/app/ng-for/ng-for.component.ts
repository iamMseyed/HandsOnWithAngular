import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  public courses:any=['C++','Java','dot Net','Python']

  //array of objects
  public productsList=[
    {
      category:'Electronics',
      products:['TV','Mobile','Laptop']
    },
    {
      category:'Men Wear',
      products:['T-Shirts','Joggers','Sneakers']
    },
    {
      category:'Brands',
      products:['ABC','DEF','GHI']
    },
  ];

  public employees=[
    {"empId":101,"empName":'ABC',"empSal":12345},
    {"empId":102,"empName":'DEF',"empSal":67890},
    {"empId":103,"empName":'GHI',"empSal":11345},
    {"empId":104,"empName":'JKL',"empSal":12355},
    {"empId":105,"empName":'MNO',"empSal":34345}
  ]
}
