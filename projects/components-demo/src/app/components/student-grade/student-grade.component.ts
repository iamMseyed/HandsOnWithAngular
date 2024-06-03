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
  totalMarks:number=this.calculatMarks(this.sub1Marks,this.sub2Marks,this.sub3Marks);
  per:number= this.calculatePercentage(this.totalMarks);
  percentage=parseFloat(this.per.toFixed(1)) //upto 1 decimal 
  grade:string=this.calculatGrade(this.percentage,this.sub1Marks,this.sub2Marks, this.sub3Marks);

  public generate(){
    this.totalMarks=this.totalMarks=this.calculatMarks(this.sub1Marks,this.sub2Marks,this.sub3Marks);
    this.per=this.calculatePercentage(this.totalMarks);
    this.percentage=parseFloat(this.per.toFixed(1));
    this.grade=this.calculatGrade(this.percentage,this.sub1Marks, this.sub2Marks,this.sub3Marks);
  }

  public calculatMarks(sub1Marks:number,sub2Marks:number,sub3Marks:number):number{
      return sub1Marks+sub2Marks+sub3Marks;
  }
  public calculatePercentage(totalMarks:number):number{
    return totalMarks/3;
  }
  public calculatGrade(percentage:number,sub1Marks:number,sub2Marks:number,sub3Marks:number):string{
      if((sub1Marks<35 || sub2Marks<35 || sub3Marks<35))
        return "Fail in a subject or more!";
      else if((sub1Marks>100 || sub2Marks>100 || sub3Marks>100))
        return "Marks can't be more than 100"
      else if(percentage<35)
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
