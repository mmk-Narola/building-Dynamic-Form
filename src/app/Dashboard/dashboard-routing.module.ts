import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarshboardComponent } from './darshboard/darshboard.component';

const routes: Routes = [{ path: '', component: DarshboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
