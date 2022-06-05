import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiInterceptorComponent } from './api-interceptor/api-interceptor.component';
import { RouterNavigateLastwordComponent } from './router-navigate-lastword/router-navigate-lastword.component';

const routes: Routes = [
  {
    path: 'router_navigate_lastword',
    component: RouterNavigateLastwordComponent
  },
  {
    path: 'api_interceptor',
    component: ApiInterceptorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VuejsRoutingModule {}
