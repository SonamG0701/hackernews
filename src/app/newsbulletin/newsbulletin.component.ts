import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HackernewsService } from '../services/hackernews.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-newsbulletin',
  templateUrl: './newsbulletin.component.html',
  styleUrls: ['./newsbulletin.component.css']
})
export class NewsbulletinComponent implements OnInit {

  public pagination: boolean;
  public page: number = 1;
  public totalPages: number;
  public feed: Array<string>;
  private subscription: any;

  
  constructor(
    private cdRef: ChangeDetectorRef,private route: ActivatedRoute,
    private router: Router,
    private _api: HackernewsService){

    }

  // ngOnInit(): void {
  //   this.subscription = this.route.queryParams.
  //   pipe(
  //     switchMap(params => {
  //       console.log(params.page);
  //       this.page = +params.page || 1;
  //       console.log(this.page);
  //       return this._api.getFeed(this.page)
  //     })
  //   )
  //   .pipe(
  //     map(data => {
  //       console.log('time'+ data);
  //       data.item.time = moment.unix(data.item.time).fromNow();
  //       return data;
  //     })
  //   )
  //   .subscribe(
  //     data => {
  //       this.feed.push(data.item);
  //     },
  //     error => console.log(error)
  //   );
  // }

  ngOnInit() {
    
  }

}
