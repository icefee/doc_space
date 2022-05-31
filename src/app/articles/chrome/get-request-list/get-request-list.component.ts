import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-get-request-list',
  templateUrl: './get-request-list.component.html',
  styleUrls: ['./get-request-list.component.css']
})
export class GetRequestListComponent extends PageComponent implements OnInit {
  public codeString: string = ''

  async ngOnInit(): Promise<void> {
    this.codeString = await this.loadCode('chrome/get-request-list/code.pre')
    setTimeout(this.initHljs, 0);
  }
}
