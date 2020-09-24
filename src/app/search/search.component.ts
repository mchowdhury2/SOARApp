import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';
import { IdeaService } from '../idea.service';
import { IDEAS } from '../mock-ideas'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ideas: Idea[];
  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
    this.getIdeas();
  }
  getIdeas(): void {
    this.ideaService.getIdeas()
        .subscribe(ideas => this.ideas = ideas)
  }
  }

