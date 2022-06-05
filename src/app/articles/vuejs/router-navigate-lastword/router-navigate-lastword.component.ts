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
    this.router_ts = await this.loadCode('vuejs/router-navigate-lastword/router_ts.pre')
    this.app_vue = await this.loadCode(('vuejs/router-navigate-lastword/app_vue.pre'))
    this.list_vue = await this.loadCode(('vuejs/router-navigate-lastword/list_vue.pre'))
    this.create_vue = await this.loadCode(('vuejs/router-navigate-lastword/create_vue.pre'))
    setTimeout(this.initHljs, 0);
  }
}
