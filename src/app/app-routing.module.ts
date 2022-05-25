import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { BackgroundClipComponent } from './articles/css/background-clip/background-clip.component';
import { GetRequestListComponent } from './articles/chrome/get-request-list/get-request-list.component';
import { BackdropFilterComponent } from './articles/css/backdrop-filter/backdrop-filter.component';
import { ClipPathComponent } from './articles/css/clip-path/clip-path.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: 'css/clip_path',
    component: ClipPathComponent
  },
  {
    path: 'css/background_clip',
    component: BackgroundClipComponent
  },
  {
    path: 'chrome/get_request_list',
    component: GetRequestListComponent
  },
  {
    path: 'css/backdrop_filter',
    component: BackdropFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
