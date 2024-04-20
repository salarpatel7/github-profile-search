import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';

const routes: Routes = [
  {path:'',component:GithubAppComponent},
  // {path:'/profilecard',component:GithubProfileCardComponent},
  // {path:'/profile',component:GithubProfileComponent},
  // {path:'/profiledata',component:GithubProfileDataComponent},
  // {path:'/repos',component:GithubReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
