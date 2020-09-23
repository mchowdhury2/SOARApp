import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {

  idea : Idea = {
    id : number;
    title: string;
    desc: string;
    tags: string;
    link: string;
  }

  constructor() { }

  ngOnInit(): void {
  }
  Submit(): void {
    
  }

}
