import { Component } from '@angular/core';

@Component({
  selector: 'app-student-grade',
  templateUrl: './student-grade.component.html',
  styleUrls: ['./student-grade.component.css']
})
export class StudentGradeComponent {
  studentID:string='ABC123';
  studentName:string='AnyName';
  sub1Marks:number=30;
  sub2Marks:number=40;
  sub3Marks:number=50; 
  totalMarks:number=this.sub1Marks+this.sub2Marks+this.sub3Marks;
  percentage:number=this.totalMarks/3;
  grade:string=this.calculatGrade(this.percentage);

  public generate(){
    this.totalMarks=this.totalMarks=this.calculatMarks(this.sub1Marks,this.sub2Marks,this.sub3Marks);
    this.percentage=this.calculatePercentage(this.totalMarks);
    this.grade=this.calculatGrade(this.percentage);
  }

  public calculatMarks(sub1Marks:number,sub2Marks:number,sub3Marks:number):number{
      return sub1Marks+sub2Marks+sub3Marks;
  }
  public calculatePercentage(totalMarks:number):number{
    return totalMarks/3;
  }
  public calculatGrade(percentage:number):string{
      if(percentage<35)
        return "Fail";
      else if(percentage>=35 && percentage<50)
        return "C";
      else if(percentage>=50 && percentage<75)
        return "B";
      else if(percentage>=75 && percentage<90)
        return "A";
      else 
        return "A+";
  }

}
