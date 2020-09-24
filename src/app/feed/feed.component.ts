import { DataSource } from '@angular/cdk/table';
import { Component, Input, OnInit } from '@angular/core';
import { Idea } from '../idea';
import { IDEAS } from '../mock-ideas'


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  displayedColumns: string[] = ['id', 'author', 'title', 'desc', 'tags', 'link'];
    
  public ideas = IDEAS;
  dataSource = IDEAS.slice(0,11);


  constructor() { }

  ngOnInit(): void {
    

  }

}
