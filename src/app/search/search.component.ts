import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ideas: Idea[];

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    this.getIdeas();
  }
  getIdeas(): void {
    this.ideaService.getIdeas()
        .subscribe(ideas => this.ideas = ideas)
  }
  }

