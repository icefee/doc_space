import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-snackbar-hook',
  templateUrl: './snackbar-hook.component.html',
  styleUrls: ['./snackbar-hook.component.css']
})
export class SnackbarHookComponent extends PageComponent implements OnInit {

  public snackbar_ts = '';
  public app_tsx = '';
  public my_page_tsx = '';

  async ngOnInit(): Promise<void> {
    const [snackbar_ts, app_tsx, my_page_tsx] = await this.loadCodes([
      'react/snackbar-hook/snackbar_ts.pre',
      'react/snackbar-hook/app_tsx.pre',
      'react/snackbar-hook/my_page_tsx.pre'
    ])
    this.snackbar_ts = snackbar_ts;
    this.app_tsx = app_tsx;
    this.my_page_tsx = my_page_tsx;
    setTimeout(this.initHljs, 0);
  }

}
