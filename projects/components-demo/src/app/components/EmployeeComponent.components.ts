import { Component } from "@angular/core";

@Component({
    selector:'app-employee',
    template:`
        <h1>Welcome To Angular Component</h1>
        <hr>
        <dl>
            <dt>EmpId</dt>
            <dd>{{empId}}</dd>
            
            <dt>Emp Name:</dt>
            <dd>{{empName}}</dd>

            <dt>Emp Salary</dt>
            <dd>{{empSalary}}</dd>
        </dl>
    `,
    styles:["h1{color:green; text-align:center;}"]
})

export class EmployeeComponent{
    empId:number=5;
    empName:string="emp name";
    empSalary:number=12000;
}
