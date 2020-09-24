import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';



interface Role {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  roles: Role[] = [
    {value: 'sd', viewValue: 'Software Developer'},
    {value: 'ba', viewValue: 'Business Analyst'},
    {value: 'pm', viewValue: 'Project Manager'},
    {value: 'de', viewValue: 'Data Engineer'},
    {value: 'it', viewValue: 'IT Technician'}
  ]
  public roleValue = "";
  constructor() { }

  ngOnInit(): void {
  }


  save(): void {
    
  }

  selectedRole(value){
    this.roleValue = value;
    console.log(value);
  }

}

