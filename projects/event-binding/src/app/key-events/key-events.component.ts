import { Component } from '@angular/core';

@Component({
  selector: 'app-key-events',
  templateUrl: './key-events.component.html',
  styleUrls: ['./key-events.component.css']
})
export class KeyEventsComponent {
  public users:any[]=
  [
    {Username:'un123'},
    {Username:'un234'},
    {Username:'un345'},
    {Username:'un456'},
    {Username:'un567'},
    {Username:'un678'}
  ]; //array of objects


  public userError:String='';
  public passError:String='';
  public isValidUser:boolean=false;
  public isValidPass:boolean=false;

  checkUser(e:any){
    let user= e.target.value;
    // alert (user.length)
   const combinedPattern = /^(?!.*\s)[\w-]+$/.test(user) //Only allowed letters, number, -, and _
    if(!combinedPattern){
      this.userError='Only allowed letters, number, -, and _';
      this.isValidUser=true;
    }
    else{
      if(user.length>3 && user.length<=12){
        for(var u of this.users){
          if(u.Username==user){
            this.userError='Username already taken!';
            this.isValidUser=true;
            break;
          }else{
           this.userError='Username is available!';
           this.isValidUser=false;
          }
        }
      }else if(user.length==0){
            this.userError='';
      }else
      {
        this.userError='username must be between 4-12 characters';
        this.isValidUser=true;
      }
    }
    
  }

  checkPassword(e:any){
    let password = e.target.value; //user input password

    if (password.length>8 && password.length<=15){
        this.passError='Password accepted!';
        this.isValidPass=false;
    }else if (password.length==0){      
      this.passError='';
    }else{
      this.passError='Password must be between 9-15 characters!';
      this.isValidPass=true;
    }
  }
}