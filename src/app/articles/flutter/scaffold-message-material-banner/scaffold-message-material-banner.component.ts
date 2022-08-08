import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-scaffold-message-material-banner',
  templateUrl: './scaffold-message-material-banner.component.html',
  styleUrls: ['./scaffold-message-material-banner.component.css']
})
export class ScaffoldMessageMaterialBannerComponent extends PageComponent implements OnInit {

  public page_dart = '';

  async ngOnInit(): Promise<void> {
    const [page_dart] = await this.loadCodes(
      [
        'flutter/scaffold-message-material-banner/page_dart.pre'
      ]
    );
    this.page_dart = page_dart;
    setTimeout(this.initHljs, 0);
  }

}
