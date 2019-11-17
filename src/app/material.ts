import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatExpansionModule, MatAutocompleteModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatAutocompleteModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule],
    exports: [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatAutocompleteModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule]
})

export class MaterialModule { }