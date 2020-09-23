import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';
import { IDEAS } from '../mock-ideas'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ideas = IDEAS;
  selectedIdea : Idea;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(idea:Idea): void{
    this.selectedIdea = idea;
}
  }

