import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-embed-wrapper',
  templateUrl: './embed-wrapper.component.html',
  styleUrls: ['./embed-wrapper.component.css']
})
export class EmbedWrapperComponent {

  @Input() src!: string;
  @Input() height = 600;

  public loading = true;

  public onLoad() {
    this.loading = false;
  }

}
