import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ServicesBarComponent } from './services-bar/services-bar.component';

@NgModule({
  declarations: [DashboardPageComponent, DestinationCardComponent, HeaderComponent, SearchBarComponent, ServicesBarComponent],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
