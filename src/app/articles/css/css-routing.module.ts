import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundClipComponent } from './background-clip/background-clip.component';
import { BackdropFilterComponent } from './backdrop-filter/backdrop-filter.component';
import { ClipPathComponent } from './clip-path/clip-path.component';

const routes: Routes = [
  {
    path: 'clip_path',
    component: ClipPathComponent
  },
  {
    path: 'backdrop_filter',
    component: BackdropFilterComponent
  },
  {
    path: 'background_clip',
    component: BackgroundClipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule {}
