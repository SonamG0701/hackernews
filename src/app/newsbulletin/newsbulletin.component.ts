import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { HackernewsService } from '../services/hackernews.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import * as moment from 'moment';
import { News, NewsItems } from '../News';
import {UpVoteService} from '../services/up-vote.service';

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
  public upVotes:[];
  public upVotesLabel:[];
  public clickNumber:number = 0;
  
  constructor(
    private cdRef: ChangeDetectorRef, private route: ActivatedRoute,
    private router: Router,
    private _api: HackernewsService,
    private upVoteService: UpVoteService) {

  }

  ngOnInit() {
    caches.delete('app-cache');

    const cache =  caches.open('app-cache');
    this.subscription = this.route.queryParams.
      pipe(
        switchMap(params => {          
          this.page = +params.page || 1;          
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
          f.upVote =0;
        }, this)                
        
        //add UpVote data
        this.feed = this.upVoteService.addUpVotes(this.feed, this.page);                     
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
    this.page = Math.max(1, this.page - 1);
  }

  onNextClick() {
    this.router.navigate(['/topstories'], {
      queryParams: {
        page: Math.min(this.totalPages, this.page + 1)
      }
    });
    this.page = Math.min(this.totalPages, this.page + 1);
  }

  onUpVoteClick(item) {
    let upVote = item.upVote;
    if(upVote == undefined)
      upVote = 0;
    item.upVote = upVote + 1;
    
    this.upVoteService.updateUpVote(item, this.page);
    this.clickNumber = this.clickNumber + 1;
  }

}
