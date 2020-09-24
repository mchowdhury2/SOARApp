import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {

  idea : Idea = {
    id : 0,
    author: "max,",
    title: "1",
    desc: "I want to",
    tags: "retail",
    role: "BSA",
    link: "http://www.google.com",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
