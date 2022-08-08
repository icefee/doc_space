import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatTabsModule,
    MatProgressBarModule,
    MatInputModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
