import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetRequestListComponent } from './get-request-list/get-request-list.component';

const routes: Routes = [
  {
    path: 'get_request_list',
    component: GetRequestListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChromeRoutingModule {}
