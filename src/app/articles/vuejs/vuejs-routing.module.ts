import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiInterceptorComponent } from './api-interceptor/api-interceptor.component';
import { RouterNavigateLastwordComponent } from './router-navigate-lastword/router-navigate-lastword.component';
import { HookWithRenderFunctionComponent } from './hook-with-render-function/hook-with-render-function.component';
import { CustomScrollbarComponent } from './custom-scrollbar/custom-scrollbar.component';

const routes: Routes = [
  {
    path: 'custom_scrollbar',
    component: CustomScrollbarComponent
  },
  {
    path: 'hook_with_render_function',
    component: HookWithRenderFunctionComponent
  },
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
