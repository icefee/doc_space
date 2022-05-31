import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-backdrop-filter',
  templateUrl: './backdrop-filter.component.html',
  styleUrls: ['./backdrop-filter.component.css']
})
export class BackdropFilterComponent extends PageComponent implements OnInit {
  public cssString: string = ''
  async ngOnInit(): Promise<void> {
    this.cssString = await this.loadCode('css/backdrop-filter/css.pre')
    setTimeout(this.initHljs, 0);
  }
}
