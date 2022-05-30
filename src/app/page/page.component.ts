import { Component, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import handlebars from 'highlight.js/lib/languages/handlebars'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
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
export class PageComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    hljs.highlightAll()
  }

}
