import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-custom-scrollbar',
  templateUrl: './custom-scrollbar.component.html',
  styleUrls: ['./custom-scrollbar.component.css']
})
export class CustomScrollbarComponent extends PageComponent implements OnInit {

  public scrollbar_vue = '';
  public app_vue = '';
  public online_demo = 'https://stackblitz.com/edit/vue-ng3itz?file=src/App.vue';

  async ngOnInit(): Promise<void> {
    const [scrollbar_vue, app_vue] = await this.loadCodes([
      'vuejs/custom-scrollbar/scrollbar_vue.pre',
      'vuejs/custom-scrollbar/app_vue.pre'
    ])
    this.scrollbar_vue = scrollbar_vue;
    this.app_vue = app_vue;
    setTimeout(this.initHljs, 0);
  }

}
