import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
    selector: 'app-api-interceptor',
    templateUrl: './api-interceptor.component.html',
    styleUrls: ['./api-interceptor.component.css']
})
export class ApiInterceptorComponent extends PageComponent implements OnInit {
    public types_ts: string = ''
    public http_ts: string = ''
    public app_vue: string = ''
    public home_vue: string = ''

    async ngOnInit(): Promise<void> {
        const [types_ts, http_ts, app_vue, home_vue] = await this.loadCodes([
            'vuejs/api-interceptor/types_ts.pre',
            'vuejs/api-interceptor/http_ts.pre',
            'vuejs/api-interceptor/app_vue.pre',
            'vuejs/api-interceptor/home_vue.pre'
        ])
        this.types_ts = types_ts
        this.http_ts = http_ts
        this.app_vue = app_vue
        this.home_vue = home_vue
        setTimeout(this.initHljs, 0);
    }
}
