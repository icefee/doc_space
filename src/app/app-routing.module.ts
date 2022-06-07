import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: 'chrome',
    loadChildren: () => import('./articles/chrome/chrome-routing.module').then(m => m.ChromeRoutingModule),
  },
  {
    path: 'css',
    loadChildren: () => import('./articles/css/css-routing.module').then(m => m.CssRoutingModule),
  },
  {
    path: 'vuejs',
    loadChildren: () => import('./articles/vuejs/vuejs-routing.module').then(m => m.VuejsRoutingModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
