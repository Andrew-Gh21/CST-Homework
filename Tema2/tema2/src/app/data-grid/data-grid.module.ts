import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridRoutingModule } from './data-grid-routing.module';
import { GridComponent } from './grid/grid.component';

import { DemoNgZorroAntdModule } from 'app/ng-zorro-antd.module';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { registerLocaleData } from '@angular/common';
import { HeaderColumnNamesPipe } from './pipes/header-column-names.pipe';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    GridComponent,
    HeaderColumnNamesPipe
  ],
  imports: [
    CommonModule,
    DataGridRoutingModule,
    DemoNgZorroAntdModule,
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ],
})
export class DataGridModule { }
