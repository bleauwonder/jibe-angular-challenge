import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})

export class SearchComponent implements OnInit {

  titleControl = new FormControl();

  options: string[] = ['Product Manager', 'Non Linear Flow', 'Video on Job Description', 'Non Linear Reapplyable', 'Test English 9', 'Test English 8', 'Test English 7', 'Test English 6', 'Multilingual Job 1'];
  filteredOptions: Observable<string[]>;
  isLoading = false;
  errorMsg: string;

  ngOnInit() {
    this.filteredOptions = this.titleControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
 
//   ngOnInit() {
//     this.titleControl.valueChanges
//       .pipe(
//         debounceTime(500),
//         tap(() => {
//           this.errorMsg = "";
//           this.filteredJobs = [];
//           this.isLoading = true;
//         }),
//         switchMap(value => this.http.get("https://testapi.io/api/crimsonsunset/code-challenge-jobs")
//           .pipe(
//             finalize(() => {
//               this.isLoading = false
//             }),
//           )
//         )
//       )
//       .subscribe(data => {
//         if (data['Search'] == undefined) {
//           this.errorMsg = data['Error'];
//           this.filteredJobs = [];
//         } else {
//           this.errorMsg = "";
//           this.filteredJobs = data['Search'];
//         }
 
//         console.log(this.filteredJobs);
//       });
//   }
// }



