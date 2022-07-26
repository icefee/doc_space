import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuejsRoutingModule } from './vuejs-routing.module';
import { HookWithRenderFunctionComponent } from './hook-with-render-function/hook-with-render-function.component';

@NgModule({
  declarations: [
    HookWithRenderFunctionComponent
  ],
  imports: [
    CommonModule,
    VuejsRoutingModule
  ]
})
export class VuejsModule { }
