// github-profile.component.ts
import { Component } from '@angular/core';
import { GithubsearchService } from 'src/app/githubsearch.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {
  searchTerm: string = '';
  username: string = 'salarpatel7'; 
  avatarUrl: string = '';
  userDetails: any;
  repositories: any[]=[];

  constructor(private githubService: GithubsearchService) {}

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails(): void {
    this.githubService.getUser(this.username).subscribe(
      (data: any) => {
        this.userDetails = data;
        this.avatarUrl = data.avatar_url;
        this.fetchUserRepositories();
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  fetchUserRepositories(): void {
    // Only fetch repositories if username is not empty
    if (this.username) {
      this.githubService.getUserRepositories(this.username).subscribe(
        (data: any[]) => {
          this.repositories = data;
        },
        (error) => {
          console.error('Error fetching user repositories:', error);
        }
      );
    }
  }


  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.username = this.searchTerm.trim();
      this.fetchUserDetails();
    }
  }
}
