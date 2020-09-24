import { Injectable } from '@angular/core';
import { Idea } from './idea';
import { IDEAS } from './mock-ideas';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  getIdeas(): Observable<Idea[]> {
    return of (IDEAS);
  }
  getIdea(id: number): Observable<Idea>{
    return of (IDEAS.find(idea => idea.id === id));
  }
  constructor() { }
}
