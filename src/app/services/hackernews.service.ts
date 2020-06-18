import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, switchMap, flatMap, filter, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HackernewsService {

  constructor(private _api: HttpClient) {}

  getFeed(pageNumber): Observable<any> {
    console.log('getFeed');
    return this._api
      .get(`https://hn.algolia.com/api/v1/search_by_date?page=${pageNumber}`)
      .pipe(retry(3))
      .pipe(map(data => {
        console.log('data:'+ data['hits']);
        data['hits']
      }))      
  }
}
