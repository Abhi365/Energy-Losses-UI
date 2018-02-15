import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { routing } from './table.routing';
import { GridModule,PDFModule } from '@progress/kendo-angular-grid';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';

import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  imports: [
    CommonModule,
    routing,
GridModule,
        ButtonsModule,
        PDFModule,
        ExcelExportModule,
  ],
  declarations: [TableComponent]
})
export class TableModule { }
