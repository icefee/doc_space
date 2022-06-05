import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuejsRoutingModule } from './vuejs-routing.module';
import { RouterNavigateLastwordComponent } from './router-navigate-lastword/router-navigate-lastword.component';
import { SafeUrlPipe } from 'src/app/safe-url.pipe';

@NgModule({
  declarations: [
    RouterNavigateLastwordComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    VuejsRoutingModule
  ]
})
export class VuejsModule { }
