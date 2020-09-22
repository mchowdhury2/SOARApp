import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
//import { profile } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit(): void {
  }

  login() : void {
    if (this.username == 'admin' && this.password == 'admin'){
      //this.router.navigate([profile]);
    }
    else {
      alert("Invalid Username or Password");
    }
  }

  signup() : void {
    
  }

}
