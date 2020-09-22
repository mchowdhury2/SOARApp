import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {

  name: string = '';
  Description: string = '';
  
  constructor() { }

  name: string;
  name2: string;
  ngOnInit(): void {
  }

}
