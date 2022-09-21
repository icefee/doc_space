import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

type IconMap = 'search-regular' | 'sad-regular' | 'react-logo' | 'vuejs-logo' | 'angular-logo'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {
  @Input()
  name!: IconMap;
  @Input()
  color: string = '#000'

  constructor(private sanitizer: DomSanitizer) { }

  public svg: SafeHtml = ''

  private async loadIcon(): Promise<void> {
    const svg = await import('./svg/' + this.name + '.icon')
    this.svg = this.sanitizer.bypassSecurityTrustHtml(svg.default as string)
  }

  ngOnInit(): void {
    this.loadIcon()
  }

}
