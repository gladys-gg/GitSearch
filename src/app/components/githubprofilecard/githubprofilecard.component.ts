import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubprofilecard',
  templateUrl: './githubprofilecard.component.html',
  styleUrls: ['./githubprofilecard.component.css']
})
export class GithubprofilecardComponent implements OnInit {

  @Input() githubProfile:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
