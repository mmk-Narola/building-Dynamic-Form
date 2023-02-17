import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DarshboardComponent } from './darshboard/darshboard.component';

@NgModule({
  declarations: [DarshboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
