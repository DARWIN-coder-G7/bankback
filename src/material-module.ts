import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatSortModule} from '@angular/material/sort';
import{MatTableModule} from '@angular/material/table';
import{MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
    exports:[MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule
    ]
})
export class MaterialModule{}