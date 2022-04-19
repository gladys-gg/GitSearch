import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubrepo',
  templateUrl: './githubrepo.component.html',
  styleUrls: ['./githubrepo.component.css']
})
export class GithubrepoComponent implements OnInit {


  @Input() githubRepos:any;

  constructor() { }

  ngOnInit(): void {
  }

}
