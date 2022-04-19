import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubrepoComponent } from './githubrepo.component';

describe('GithubrepoComponent', () => {
  let component: GithubrepoComponent;
  let fixture: ComponentFixture<GithubrepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubrepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
