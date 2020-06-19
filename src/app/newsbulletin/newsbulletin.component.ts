import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HackernewsService } from '../services/hackernews.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import * as moment from 'moment';
import { News, NewsItems } from '../News';

@Component({
  selector: 'app-newsbulletin',
  templateUrl: './newsbulletin.component.html',
  styleUrls: ['./newsbulletin.component.css']
})
export class NewsbulletinComponent implements OnInit {

  public pagination: boolean;
  public page: number = 1;
  public totalPages: number;
  public feed: NewsItems[];
  private subscription: any;


  constructor(
    private cdRef: ChangeDetectorRef, private route: ActivatedRoute,
    private router: Router,
    private _api: HackernewsService) {

  }

  ngOnInit() {

    this.subscription = this.route.queryParams.
      pipe(
        switchMap(params => {
          console.log(params.page);
          this.page = +params.page || 1;
          console.log(this.page);
          return this._api.getFeed(this.page)
        })
      ).
      subscribe((data: News) => {
        this.feed = (data.hits);
        this.totalPages = +data.nbPages;
        this.feed.forEach(function (f) {
          f.isVisible = true;
          f.created_at = moment.unix(new Date(f.created_at).getTime() / 1000).fromNow();
          f.hostname = this.extractHostname(f.story_url);
        }, this)
        console.log(this.feed);
      })

  }

  openUrl(url) {
    window.open(url);
  }

  extractHostname(url) {
    if (!url) return undefined;
    let hostname;
    if (url.indexOf('://') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    return hostname.split(':')[0].split('?')[0];
  }

  onHideClick(item) {
    item.isVisible = false;
  }

  onPrevClick() {
    this.router.navigate(['/topstories'], {
      queryParams: {
        page: Math.max(1, this.page - 1)
      }
    });
  }

  onNextClick() {
    this.router.navigate(['/topstories'], {
      queryParams: {
        page: Math.min(this.totalPages, this.page + 1)
      }
    });
  }

  onUpVoteClick(item) {
    let upVote = item.upVote;
    if(upVote == undefined)
      upVote = 0;
    item.upVote = upVote + 1;
  }

}
