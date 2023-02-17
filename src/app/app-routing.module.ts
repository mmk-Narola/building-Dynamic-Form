import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'dynamic-form',
    loadChildren: () =>
      import('./DynamicForm/dynamic-form.module').then(
        (m) => m.DynamicFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
