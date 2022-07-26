import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-hook-with-render-function',
  templateUrl: './hook-with-render-function.component.html',
  styleUrls: ['./hook-with-render-function.component.css']
})
export class HookWithRenderFunctionComponent extends PageComponent implements OnInit {

  dialog_tsx = '';
  test_tsx = '';

  async ngOnInit(): Promise<void> {
    const [dialog_tsx, test_tsx] = await this.loadCodes([
      'vuejs/hook-with-render-function/dialog_tsx.pre',
      'vuejs/hook-with-render-function/test_tsx.pre',
    ])
    this.dialog_tsx = dialog_tsx
    this.test_tsx = test_tsx
    setTimeout(this.initHljs, 0);
  }

}
