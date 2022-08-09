import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-steps-animation-timing-function',
  templateUrl: './steps-animation-timing-function.component.html',
  styleUrls: ['./steps-animation-timing-function.component.css']
})
export class StepsAnimationTimingFunctionComponent extends PageComponent implements OnInit {

  html = '';
  css = '';

  constructor() {
    super();
  }

  async ngOnInit(): Promise<void> {
    const [html, css] = await this.loadCodes([
      'css/steps-animation-timing-function/html.pre',
      'css/steps-animation-timing-function/css.pre'
    ])
    this.html = html;
    this.css = css;
    setTimeout(this.initHljs, 0);
  }

}
