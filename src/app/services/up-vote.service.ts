import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpVoteService {

  constructor() { }

  addUpVotes(items, pageNumber) {   
    if(localStorage.getItem('Votes' + pageNumber)) {
      let votesArray = [];
      let votes = JSON.parse(localStorage.getItem('Votes' + pageNumber));      

      votes.forEach((vote, i) => {
        items[i].upVote = vote.upVote;
      });      
    }      
    else {
      localStorage.setItem('Votes'+ pageNumber, JSON.stringify(items));
    }

    return items;
  }
  
  updateUpVote(voteData, pageNumber) {
   let votesArray = [];
  let localStorageName= 'Votes' + pageNumber;

   if(localStorage.getItem(localStorageName)) {
    let votes = JSON.parse(localStorage.getItem(localStorageName));
    votes.map((vote) => {
       if(vote.story_id == voteData.story_id) {
         vote.upVote = voteData.upVote;
       }
     })
     
     localStorage.setItem(localStorageName, JSON.stringify(votes));
   }     

  }
}
