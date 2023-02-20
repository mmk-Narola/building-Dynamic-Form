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
  {
    path: 'reusablecom-form',
    loadChildren: () =>
      import('./DynamicForm-ReusableCom/reusablecom-form.module').then(
        (m) => m.ReusablecomFormModule
      ),
  },
  {
    path: 'dynamic-form-json',
    loadChildren: () =>
      import('./DynamicForm-JSON/dynamicform-json.module').then(
        (m) => m.DynamicformJsonModule
      ),
  },
  {
    path: 'dynamic-form-object-model',
    loadChildren: () =>
      import('./DynamicForm-ObjectModel/dynamicform-object-model.module').then(
        (m) => m.DynamicformObjectModelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
