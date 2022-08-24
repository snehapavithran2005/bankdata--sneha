import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginbank',
  templateUrl: './loginbank.component.html',
  styleUrls: ['./loginbank.component.css']
})
export class LoginbankComponent implements OnInit {
//property/variable
header="welcome to our bank......."
accplaceholder ="account plese"
//accno to hold accno
 acno=""
//pawd to hold pwd
pasw=""

//db
database:any={
  1000:{accno:1000,username:'neer',password:1000,balance:5000},
  1001:{accno:1001,username:'raj',password:1001,balance:6000},
  1002:{accno:1002,username:'ram',password:1002,balance:3000}
}

  constructor() { }

  ngOnInit(): void {
  }
  //user defind function
  acnoChange(event:any){
    this.acno =event.target.value
    //console.log( this.acno );
  }
  paswChange(event:any){
    this.pasw=event.target.value
   // console.log(this.pasw);
  }

login(){
//fetch acno
var acno = this.acno
console.log(acno);
//fetch password
var pasw= this.pasw
console.log(pasw);

let userDetails =this.database
if(acno in userDetails){
  if(pasw==userDetails[acno]['pasw']){
    alert('login succdes')
  }
 else{
   alert('incorrect pswd')

 }

}
else{
  alert('user does not exist')
}
}

}
