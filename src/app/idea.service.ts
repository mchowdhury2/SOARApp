import { Injectable } from '@angular/core';
import { Idea } from './idea';
import { IDEAS } from './mock-ideas';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  constructor(private http: HttpClient) { }
  private ideasUrl = 'api/ideas';
  getIdeas(): Observable<Idea[]> {
    return of(IDEAS)
  }
  getIdea(id: number): Observable<Idea>{
    return of (IDEAS.find(idea => idea.id === id));
  }
 

}
