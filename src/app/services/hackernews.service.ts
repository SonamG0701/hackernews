import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, switchMap, flatMap, filter, retry } from 'rxjs/operators';
import {News} from '../News'

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {

  constructor(private _api: HttpClient) {}

  getFeed(pageNumber):Observable<News> {
    console.log('getFeed');
    return this._api
      .get<News>(`https://hn.algolia.com/api/v1/search_by_date?page=${pageNumber}`)
      .pipe(retry(3))
      .pipe(map((data:News) => data as News))
      // .pipe(map((data:News) => {        
      //   data.data
      // }))
  }
}
