import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: "Amani"
  password: any

  invalidLogin = false
  errorMessage = "you are entered wrong credentials"

  constructor(private router: Router,) { }

  ngOnInit() {
  }
  // handleLogin(){
    //test from broser from vs codes froi bwoser
  //   console.log(this.username)
  //   if(this.username=="Amani" && this.password=="reddy"){
  //     this.invalidLogin = false
  //   }else{
  //     this.invalidLogin = true
  //   }
  myHandleLogin() {
    console.log(this.username)
    this.router.navigate(['welcome', this.username])
    
    if (this.username == "Amani" && this.password == "reddy") {
      // this.router.navigate(['welcome', "xxxxx"])
      // this.router.navigate(['todos'])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }


}


