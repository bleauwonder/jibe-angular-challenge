import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { JobResponse, Options } from '../option';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get('https://testapi.io/api/crimsonsunset/code-challenge-jobs')
  }

  // Search bar specific search
  
  search(query: string): Observable<JobResponse> {
    const url = 'https://testapi.io/api/crimsonsunset/code-challenge-jobs';
    
    return this.http.get<JobResponse>(url, { observe: 'response'})
    .pipe(map(res => {
      return res.body;
    }))
  }
}


