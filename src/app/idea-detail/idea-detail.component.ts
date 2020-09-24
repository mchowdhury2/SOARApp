import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IdeaService } from '../idea.service'
import { Idea } from '../idea';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css']
})
export class IdeaDetailComponent implements OnInit {
  idea:Idea;
  constructor(
    private route: ActivatedRoute,
    private ideaService: IdeaService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getIdea();
  }
  getIdea(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ideaService.getIdea(id)
      .subscribe(idea => this.idea = idea);
  }
  goBack(): void {
    this.location.back();
  }
}
