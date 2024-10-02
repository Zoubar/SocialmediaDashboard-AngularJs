import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Feed } from '../models/feed.interface';
import { Story } from '../models/story.interface';
import { Suggestion } from '../models/suggestion.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  feed?: Feed;
  stories?: Story[];
  suggestions?: Suggestion[];
  constructor(private http: HttpClient) {}

  // Http request to retrieve feeds Data
  getAllFeeds(): Observable<Feed> {
    const url = '../assets/feed.json';
    return this.http
      .get<Feed>(url)
      .pipe(map((response: Feed) => (this.feed = response)));
  }

  // Http request to retrieve stories data
  getAllStories(): Observable<Story[]> {
    const url = '../assets/stories.json';
    return this.http
      .get<Story[]>(url)
      .pipe(map((response: Story[]) => (this.stories = response)));
  }

  // Http request to retrieve suggestions data
  getAllSuggestions(): Observable<Suggestion[]> {
    const url = '../assets/suggestions.json';
    return this.http
      .get<Suggestion[]>(url)
      .pipe(map((response: Suggestion[]) => (this.suggestions = response)));
  }
}
