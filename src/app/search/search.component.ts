import { Component, OnInit } from '@angular/core';
import { Jobs } from '../option';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, debounceTime, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})

export class SearchComponent implements OnInit {

  public jobAutoComplete$: Observable<Jobs> = null;
  public autoCompleteControl = new FormControl();

  options: string[] = ['Product Manager', 'Non Linear Flow', 'Video on Job Description', 'Non Linear Reapplyable', 'Test English 9', 'Test English 8', 'Test English 7', 'Test English 6', 'Multilingual Job 1'];

  constructor(private apiService: ApiService) {}

  // new try to have the search read what's typed to autocomplete and read the JSON
  
  lookup(value: string): Observable<Jobs> {
    return this.apiService.search(value.toLowerCase()).pipe(
      map(results => results.options),
      catchError(_ => {
        return of(null);
      })
    );
  }

ngOnInit() {
  this.jobAutoComplete$ = this.autoCompleteControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    switchMap(value => {
      if (value !== '') {
        return this.lookup(value);
      } else {
        return of(null);
      }
    })
  );
}
}


// Original AutoComplete with search choices

//   titleControl = new FormControl();

//   options: string[] = ['Product Manager', 'Non Linear Flow', 'Video on Job Description', 'Non Linear Reapplyable', 'Test English 9', 'Test English 8', 'Test English 7', 'Test English 6', 'Multilingual Job 1'];
//   filteredOptions: Observable<string[]>;
//   isLoading = false;
//   errorMsg: string;

//   ngOnInit() {
//     this.filteredOptions = this.titleControl.valueChanges
//       .pipe(
//         startWith(''),
//         map(value => this._filter(value))
//       );
//   }

//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();

//     return this.options.filter(option => option.toLowerCase().includes(filterValue));
//   }
// }
 
