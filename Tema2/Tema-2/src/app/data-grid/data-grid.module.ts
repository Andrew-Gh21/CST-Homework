import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridRoutingModule } from './data-grid-routing.module';
import { GridComponent } from './grid/grid.component';

import { DemoNgZorroAntdModule } from 'app/ng-zorro-antd.module';
import { HeaderColumnNamesPipe } from './pipes/header-column-names.pipe';
import { TemplateModalComponent } from './template-modal/template-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GridComponent,
    HeaderColumnNamesPipe,
    TemplateModalComponent
  ],
  imports: [
    CommonModule,
    DataGridRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule
  ],
})
export class DataGridModule { }
