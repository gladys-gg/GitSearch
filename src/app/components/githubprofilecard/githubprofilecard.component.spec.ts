import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubprofilecardComponent } from './githubprofilecard.component';

describe('GithubprofilecardComponent', () => {
  let component: GithubprofilecardComponent;
  let fixture: ComponentFixture<GithubprofilecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubprofilecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubprofilecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
