import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnackbarHookComponent } from './snackbar-hook/snackbar-hook.component';

const routes: Routes = [
  {
    path: 'snackbar_hook',
    component: SnackbarHookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactRoutingModule {}
