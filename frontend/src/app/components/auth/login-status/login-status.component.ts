import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {


  constructor() { 
  }

  ngOnInit(): void {
  }

  getStatus(){
    let isLogin = false

    if(localStorage.getItem("currentUser") != null){
      isLogin = true
    }
    return isLogin
  }
}
