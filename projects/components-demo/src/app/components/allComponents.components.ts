import { Component } from "@angular/core";

// @Component({
//     selector:'app-employee',
//     template:`
//         <h1>Welcome To Angular Component</h1>
//         <hr>
//         <dl>
//             <dt>EmpId</dt>
//             <dd>{{empId}}</dd>
            
//             <dt>Emp Name:</dt>
//             <dd>{{empName}}</dd>

//             <dt>Emp Salary</dt>
//             <dd>{{empSalary}}</dd>
//         </dl>
//     `,
//     styles:["h1{color:green; text-align:center;}"]
// })

// export class EmployeeComponent{
//     empId:number=5;
//     empName:string="emp name";
//     empSalary:number=12000;
// }

@Component({
    selector:"app-student",
    template:`
        <h1> Student Details </h1> <hr>
        <dl>
            <dt>Student ID</dt>
            <dd>{{stuId}}</dd>

            <dt>Student Name</dt>
            <dd>{{stuName}}</dd>

            <dt>Subjects appeared in</dt>
            <dd>
                <ul>
                    <li *ngFor="let subject of stuSub">{{ subject }}</li>
                </ul>
            </dd>

            <dt>Marks of subjects</dt>
            <dd>
                <ul>
                    <li *ngFor="let marks of stuSubMarks">{{ marks }}</li>
                </ul>
            </dd>
        </dl>
    `,
    styles:["h1{color:red;text-align:center}"]
})

export class StudentComponent{
    stuId:number=1;
    stuName:string="stu name";
    stuSub:string[]=["Maths","Science","English","Arabic","Computer"];
    stuSubMarks:number[]=[70,80,50,50,90];
}