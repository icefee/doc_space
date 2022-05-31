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
    this.gradientCssString = await this.loadCode('css/background-clip/gradient.pre')
    this.imageCssString = await this.loadCode('css/background-clip/image.pre')
    setTimeout(this.initHljs, 0);
  }

}
