import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-clip-path',
  templateUrl: './clip-path.component.html',
  styleUrls: ['./clip-path.component.css']
})
export class ClipPathComponent extends PageComponent implements OnInit {
  public cssString: string = ''
  public svgMaskString: string = ''
  // public scale: number = 5;
  async ngOnInit(): Promise<void> {
    const [cssString, svgMaskString] = await this.loadCodes([
      'css/clip-path/css.pre',
      'css/clip-path/svg.pre'
    ])
    this.cssString = cssString
    this.svgMaskString = svgMaskString
    setTimeout(this.initHljs, 0);
  }
}
