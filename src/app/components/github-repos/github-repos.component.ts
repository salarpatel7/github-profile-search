import { Component } from '@angular/core';
import { GithubsearchService } from 'src/app/githubsearch.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent {
  searchTerm: string = '';
  username: string = ''; 
  avatarUrl: string = '';
  userDetails: any;
  repositories: any[] = [];

  constructor(private githubService: GithubsearchService) {}

  ngOnInit(): void {
    // Fetch repositories when component initializes
    this.fetchUserRepositories();
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
}
