import { Component } from '@angular/core';
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import handlebars from 'highlight.js/lib/languages/handlebars'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import { loadCode } from 'src/utils/code'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('handlebars', handlebars)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  protected lastScrollTop = 0;
  public isToTop = false;

  protected initHljs(): void {
    hljs.highlightAll()
  }

  protected loadCode(path: string) {
    return loadCode(path)
  }

  protected loadCodes(paths: string[]) {
    return Promise.all(
      paths.map(loadCode)
    )
  }

  public handleListScroll(event: Event): void {
    const scrollTop = (event.target as HTMLDivElement).scrollTop;
    this.isToTop = scrollTop - this.lastScrollTop > 0;
    this.lastScrollTop = scrollTop;
  }

}
