import { MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatMenuModule, MatExpansionModule, MatAutocompleteModule, MatDividerModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatAutocompleteModule, MatDividerModule, MatFormFieldModule],
    exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatAutocompleteModule, MatDividerModule, MatFormFieldModule]
})
export class MaterialModule { }