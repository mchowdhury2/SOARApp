import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  title: string;
  description: string;
  chatroom: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'IoT', description: 'Idea about internet of things', chatroom: '/chat'},
  {title: 'Retail', description: 'Idea about retail.', chatroom: '/chat'},
  {title: 'Database', description: 'Idea about database.', chatroom: '/chat'},
  {title: 'SOAR', description: 'Idea about SOAR Orientation', chatroom: '/chat'},
  {title: 'IoT', description: 'Idea about internet of things', chatroom: '/chat'},
  {title: 'IoT', description: 'Idea about internet of things', chatroom: '/chat'},
  {title: 'Retail', description: 'Idea about retail.', chatroom: '/chat'},
  {title: 'Database', description: 'Idea about database.', chatroom: '/chat'},
  {title: 'SOAR', description: 'Idea about SOAR Orientation', chatroom: '/chat'},
  {title: 'IoT', description: 'Idea about internet of things', chatroom: '/chat'},
  
];


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'chatroom'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
