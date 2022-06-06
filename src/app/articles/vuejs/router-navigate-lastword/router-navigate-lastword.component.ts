import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-router-navigate-lastword',
  templateUrl: './router-navigate-lastword.component.html',
  styleUrls: ['./router-navigate-lastword.component.css']
})
export class RouterNavigateLastwordComponent extends PageComponent implements OnInit {
  public router_ts: string = ''
  public app_vue: string = ''
  public list_vue: string = ''
  public create_vue: string = ''
  public online_demo: string = 'https://stackblitz.com/edit/vitejs-vite-6r13a9?file=src/pages/List.vue'

  async ngOnInit(): Promise<void> {
    const [router_ts, app_vue, list_vue, create_vue] = await this.loadCodes([
      'vuejs/router-navigate-lastword/router_ts.pre',
      'vuejs/router-navigate-lastword/app_vue.pre',
      'vuejs/router-navigate-lastword/list_vue.pre',
      'vuejs/router-navigate-lastword/create_vue.pre'
    ])
    this.router_ts = router_ts
    this.app_vue = app_vue
    this.list_vue = list_vue
    this.create_vue = create_vue
    setTimeout(this.initHljs, 0);
  }
}
