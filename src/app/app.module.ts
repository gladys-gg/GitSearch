import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubrepoComponent } from './components/githubrepo/githubrepo.component';
import { GithubprofileComponent } from './components/githubprofile/githubprofile.component';
import { GithubprofilecardComponent } from './components/githubprofilecard/githubprofilecard.component';
import { GithubprofiledataComponent } from './components/githubprofiledata/githubprofiledata.component';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GithubrepoComponent,
    GithubprofileComponent,
    GithubprofilecardComponent,
    GithubprofiledataComponent,
    GithubAppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
