import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {

  constructor(private http: HttpClient) { }

  private apiUrl='https://api.github.com/users/'
  private token = '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'
  private headers = new HttpHeaders({
    'Authorization': `token ${this.token}`
  });

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${username}`, { headers: this.headers });
  }

  getUserRepositories(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${username}/repos`, { headers: this.headers });
  }


  getBio(username:any):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}${username}`, { headers: this.headers })
  }


}
