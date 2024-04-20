import { Component } from '@angular/core';
import { GithubsearchService } from 'src/app/githubsearch.service';

@Component({
  selector: 'app-github-profile-data',
  templateUrl: './github-profile-data.component.html',
  styleUrls: ['./github-profile-data.component.css']
})
export class GithubProfileDataComponent {
  bio: string = ''; // Define bio as a string
  username: string='';
  userDetails: any;

  constructor(private githubService: GithubsearchService) {}

  ngOnInit(): void {
    this.fetchUserBio();
  }

  fetchUserBio(): void {
    this.githubService.getBio(this.username).subscribe(
      (data: any) => {
        this.userDetails = data;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }
}
