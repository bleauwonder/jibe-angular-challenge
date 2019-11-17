import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs: Object;

  constructor(private data: ApiService) { }

  ngOnInit() {
    this.data.getJobs().subscribe(data => {
      this.jobs = data
      console.log(this.jobs)
    })
  }

}