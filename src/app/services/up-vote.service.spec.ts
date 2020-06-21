import { TestBed } from '@angular/core/testing';

import { UpVoteService } from './up-vote.service';

describe('UpVoteService', () => {
  let service: UpVoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpVoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
