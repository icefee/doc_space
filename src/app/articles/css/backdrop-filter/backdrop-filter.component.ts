import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-backdrop-filter',
  templateUrl: './backdrop-filter.component.html',
  styleUrls: ['./backdrop-filter.component.css']
})
export class BackdropFilterComponent extends PageComponent {
  public cssString: string = `{\n  backdrop-filter: saturate(180%) blur(5px); \n}`
}
