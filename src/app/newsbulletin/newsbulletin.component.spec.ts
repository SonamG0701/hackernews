import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsbulletinComponent } from './newsbulletin.component';

describe('NewsbulletinComponent', () => {
  let component: NewsbulletinComponent;
  let fixture: ComponentFixture<NewsbulletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsbulletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsbulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
