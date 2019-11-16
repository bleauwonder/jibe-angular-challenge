import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FindJobs } from "../../models/findjobs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs;

  constructor(private apiService: ApiService) { }

  ngOnInit(): Observable<Jobs[]> {

    this.apiService.getJobs().subscribe(
      data => {
        this.jobs = data;
        console.log(this.jobs);
      },
      err => console.error(err),
      () => console.log("Job Items Geladen")
    );
  }

}
