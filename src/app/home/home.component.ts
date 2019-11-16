import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getJobs().subscribe(
      (data: any[]) => {
        this.jobs = data;
        console.log(this.jobs);
      },
      err => console.error(err),
      () => console.log("Job Items Geladen")
    );
  }

}
