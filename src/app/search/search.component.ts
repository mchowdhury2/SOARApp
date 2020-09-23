import { Component, OnInit } from '@angular/core';
import { IDEAS } from '../mock-ideas'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ideas = IDEAS;
  constructor() { }

  ngOnInit(): void {
  }

}
