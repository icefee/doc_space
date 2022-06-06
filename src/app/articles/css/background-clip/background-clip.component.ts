import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-background-clip',
  templateUrl: './background-clip.component.html',
  styleUrls: ['./background-clip.component.css']
})
export class BackgroundClipComponent extends PageComponent implements OnInit {

  public gradientCssString: string = ''
  public imageCssString: string = ''

  async ngOnInit(): Promise<void> {
    const [gradientCss, imageCss] = await this.loadCodes([
      'css/background-clip/gradient.pre',
      'css/background-clip/image.pre'
    ])
    this.gradientCssString = gradientCss
    this.imageCssString = imageCss
    setTimeout(this.initHljs, 0);
  }

}
