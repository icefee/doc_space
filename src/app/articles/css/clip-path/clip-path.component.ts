import { Component } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-clip-path',
  templateUrl: './clip-path.component.html',
  styleUrls: ['./clip-path.component.css']
})
export class ClipPathComponent extends PageComponent {
  public cssString: string = `{\n clip-path: url(#mask); \n}`
  public svgMaskString: string = `
  <svg width="200" height="150" viewBox="0 0 200 150" [ngStyle]="{height: 0}">
    <defs>
      <clipPath id="mask">
          <path d="M0,0 L150,0 200,50 200,150 0,150Z" />
      </clipPath>
    </defs>
  </svg>`
  // public scale: number = 5;
}
