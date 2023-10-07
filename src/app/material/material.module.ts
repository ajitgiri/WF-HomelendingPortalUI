import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatButtonModule  } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule  } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatChipsModule} from '@angular/material/chips';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule} from '@angular/material/card';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatTabsModule} from '@angular/material/tabs';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import {A11yModule} from '@angular/cdk/a11y';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';

const materialImportExportComponents = [
  MatFormFieldModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatChipsModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatCardModule,
  MatBottomSheetModule,
  MatTabsModule,
  MatDialogModule,
  A11yModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatTooltipModule
]

@NgModule({
  declarations: [],
  imports: [ materialImportExportComponents ],
  exports: [ materialImportExportComponents ]
})
export class MaterialModule { }

/**
 * This is the Common module we create for the Angular Material Components
 * Instead of massing up material Components in app.module.ts file, will import & Export all modules here 
 * 
 * To create the module by using command : ng g m material
 * Now go to the material/material.module.ts
 *      Delete common module : @anular/common
 *      create exports module inside @NgModule like above
 *      Create 1 constant veriable to define all the imported material modules : materialImportExportComponents
 *      Use this created constant variable in imports and exports part : imports: [ materialImportExportComponents ],
 * Now go to the app.module.ts, import the created material module and decalre inside: imports: MaterialModule 
 */