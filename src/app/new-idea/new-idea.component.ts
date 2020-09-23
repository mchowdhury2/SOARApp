import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {

  Title: string;
  desc: string;

  constructor() { }

  ngOnInit(): void {
  }
  Submit(): void {
    
  }

}
