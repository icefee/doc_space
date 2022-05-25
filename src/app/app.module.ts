import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { GetRequestListComponent } from './articles/chrome/get-request-list/get-request-list.component';
import { BackdropFilterComponent } from './articles/css/backdrop-filter/backdrop-filter.component';
import { BackgroundClipComponent } from './articles/css/background-clip/background-clip.component';
import { ClipPathComponent } from './articles/css/clip-path/clip-path.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ArticleListComponent,
    GetRequestListComponent,
    BackdropFilterComponent,
    BackgroundClipComponent,
    ClipPathComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
