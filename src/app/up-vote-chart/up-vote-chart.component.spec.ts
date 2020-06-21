import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpVoteChartComponent } from './up-vote-chart.component';

describe('UpVoteChartComponent', () => {
  let component: UpVoteChartComponent;
  let fixture: ComponentFixture<UpVoteChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpVoteChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpVoteChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
