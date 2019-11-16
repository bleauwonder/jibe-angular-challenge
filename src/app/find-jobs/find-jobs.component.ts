import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.scss']
})
export class FindJobsComponent implements OnInit {

  jobs;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getJobs().subscribe((data)=>{
      console.log(data);
      this.jobs = data['jobs'];
    });
  }

}
