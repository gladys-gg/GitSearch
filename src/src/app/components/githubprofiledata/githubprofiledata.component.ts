import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubprofiledata',
  templateUrl: './githubprofiledata.component.html',
  styleUrls: ['./githubprofiledata.component.css']
})
export class GithubprofiledataComponent implements OnInit {

  @Input() githubProfile:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
