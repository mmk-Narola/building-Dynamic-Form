import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReusablecompFormComponent } from './reusablecomp-form/reusablecomp-form.component';

const routes: Routes = [{ path: '', component: ReusablecompFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReusablecomFormRoutingModule {}
