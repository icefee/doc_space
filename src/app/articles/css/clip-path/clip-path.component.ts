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

  public size: number = 200
  public pos: number = 0

  public online_demo_react: string = 'https://stackblitz.com/edit/react-ts-yfrv7s?file=components/Paper/Paper.tsx'
  public online_demo_vuejs: string = 'https://stackblitz.com/edit/vue-vcgb1r?embed=1&file=src/components/Paper.vue'
  public online_demo_angular: string = 'https://stackblitz.com/edit/angular-ivy-nm5gqz?embed=1&file=src/app/paper/paper.component.html'

  async ngOnInit(): Promise<void> {
    const [cssString, svgMaskString] = await this.loadCodes([
      'css/clip-path/css.pre',
      'css/clip-path/svg.pre'
    ])
    this.cssString = cssString
    this.svgMaskString = svgMaskString
    setTimeout(this.initHljs, 0);
  }

  public get clipPath(): string {
    const { size: s, pos: p } = this
    const r = p / 40
    return `M 0 0 L ${s - p} 0 Q ${s - p + 20} ${27 * r} ${s - p + 10} ${60 * r} Q ${s} ${64 * r} ${s} ${77 * r} L ${s} ${s} L 0 ${s} Z`
  }

  public get dropPath(): string {
    const { size: s, pos: p } = this
    const r = p / 40
    return `M ${s - p} 0 Q ${s - p + 20} ${27 * r} ${s - p + 10} ${60 * r} Q ${s} ${64 * r} ${s} ${77 * r} Z`
  }

}
