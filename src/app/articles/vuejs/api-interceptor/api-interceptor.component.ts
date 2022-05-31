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
        this.types_ts = await this.loadCode('vuejs/api-interceptor/types_ts.pre')
        this.http_ts = await this.loadCode('vuejs/api-interceptor/http_ts.pre')
        this.app_vue = await this.loadCode('vuejs/api-interceptor/app_vue.pre')
        this.home_vue = await this.loadCode('vuejs/api-interceptor/home_vue.pre')
        setTimeout(this.initHljs, 0);
    }
}
