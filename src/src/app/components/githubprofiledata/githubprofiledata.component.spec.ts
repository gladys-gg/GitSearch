import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubprofiledataComponent } from './githubprofiledata.component';

describe('GithubprofiledataComponent', () => {
  let component: GithubprofiledataComponent;
  let fixture: ComponentFixture<GithubprofiledataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubprofiledataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubprofiledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
