import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChromeModule } from './articles/chrome/chrome.module';
import { CssModule } from './articles/css/css.module';
import { VuejsModule } from './articles/vuejs/vuejs.module';

import { RouterNavigateLastwordComponent } from './articles/vuejs/router-navigate-lastword/router-navigate-lastword.component';
import { ApiInterceptorComponent } from './articles/vuejs/api-interceptor/api-interceptor.component';
import { HookWithRenderFunctionComponent } from './articles/vuejs/hook-with-render-function/hook-with-render-function.component';

import { ClipPathComponent } from './articles/css/clip-path/clip-path.component';
import { BackdropFilterComponent } from './articles/css/backdrop-filter/backdrop-filter.component';
import { BackgroundClipComponent } from './articles/css/background-clip/background-clip.component';

import { SafeUrlPipe } from './safe-url.pipe';
import { MaterialModule } from './material/material.module';
import { IconComponent } from './icon/icon.component';
import { LoadingWrapperComponent } from './components/loading-wrapper/loading-wrapper.component';
import { GetRequestListComponent } from './articles/chrome/get-request-list/get-request-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    SafeUrlPipe,
    IconComponent,
    LoadingWrapperComponent,

    GetRequestListComponent,

    BackgroundClipComponent,
    ClipPathComponent,
    BackdropFilterComponent,

    RouterNavigateLastwordComponent,
    HookWithRenderFunctionComponent,
    ApiInterceptorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChromeModule,
    CssModule,
    VuejsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
