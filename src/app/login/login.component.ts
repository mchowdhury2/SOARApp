import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
//import { ProfileComponent } from './profile.component';

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

    this.router.navigate(['/feed']);

    // if (this.username == 'admin' && this.password == 'admin'){
    //   
    // }
    // else {
    //   alert("Invalid Username or Password");
    // }
  }

  signup() : void {
    
  }

}
