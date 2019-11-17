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
    this.data.getJobs().subscribe(response => {
      this.jobs = response['jobs'];
      console.log(response);
    })
  }

}