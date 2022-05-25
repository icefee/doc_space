import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import handlebars from 'highlight.js/lib/languages/handlebars'
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('handlebars', handlebars)
hljs.registerLanguage('xml', xml)

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  ngOnInit(): void {
    hljs.highlightAll()
  }

}
