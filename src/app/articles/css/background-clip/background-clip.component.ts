import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-background-clip',
  templateUrl: './background-clip.component.html',
  styleUrls: ['./background-clip.component.css']
})
export class BackgroundClipComponent extends PageComponent implements OnInit {

  public gradientCssString: string = `{\n background-image: linear-gradient(90deg, #ff006e, #6600eb, #0bb2db); \n background-clip: text; \n -webkit-text-fill-color: transparent; \n}`
  public imageCssString: string = `{\n background: url('background.jfif') no-repeat center / 100% auto; \n background-clip: text; \n -webkit-text-fill-color: transparent; \n}`

  ngOnInit(): void {
  }

}
