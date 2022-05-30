import { Component } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-api-interceptor',
  templateUrl: './api-interceptor.component.html',
  styleUrls: ['./api-interceptor.component.css']
})
export class ApiInterceptorComponent extends PageComponent {
  public types: string = `type RequestMethod = 'GET' | 'POST'

export type ApiResult<T = any> = {
    code: number;
    data: T;
    detail?: string;
    msg?: string;
}

type Interceptor = {
    request?: ((arg: RequestInit) => RequestInit) | null;
    response?: (<T = any>(arg: ApiResult<T>) => Promise<ApiResult<T>>) | null;
}
`
  public http_js: string = `import { shallowReactive, shallowRef, defineComponent, provide, inject } from 'vue'
// import type { PropType } from 'vue'

import { getToken, Api } from '../utils/api'

const baseApiUrl = '/api/';
const interceptors = shallowReactive<Interceptor>({
    request: null,
    response: null
})
const tokenExpire = shallowRef(false)
const errorResponse = shallowRef<ApiResult | null>(null)

export function setToken(token: string) {
    tokenExpire.value = false
    localStorage.setItem(Api.tokenStoreKey, token);
}

async function request<T = any>(url: string, method: RequestMethod, contentType: string | null, body: any): Promise<ApiResult<T>> {
    if (tokenExpire.value) {
        return errorResponse.value as ApiResult<T>
    }
    const headers: Headers = new Headers({
        // 'Content-Type': contentType, // 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': getToken()
    });
    if (contentType) {
        headers.append('Content-Type', contentType);
    }
    const requestConfig: RequestInit = {
        mode: 'cors',
        method,
        headers,
        body,
    };
    const interceptRequest = interceptors.request ? interceptors.request(requestConfig) : requestConfig
    const response = await fetch(baseApiUrl + url, interceptRequest);
    const data: ApiResult<T> = await response.json();
    if (!interceptors.response) {
        return data
    }
    try {
        const interceptResponse = await interceptors.response<T>(data)
        return interceptResponse
    }
    catch(err: any) {
        tokenExpire.value = true
        errorResponse.value = err
        return errorResponse.value as ApiResult<T>
    }
}

function getJson<T>(url: string, query?: { [key: string]: string | number }) {
    let _url = url;
    if (query) {
        const urlSerachParams = new URLSearchParams(query as Record<string, string>);
        /*
        Object.keys(query).map(
            key => {
                urlSerachParams.append(key, query[key]?.toString())
            }
        )
        */
        _url += '?' + urlSerachParams.toString()
    }
    return request<T>(_url, 'GET', 'application/json', null);
}

function postJson<T>(url: string, body: object) {
    return request<T>(url, 'POST', 'application/json', JSON.stringify(body));
}

const httpProvide = Symbol()

type HttpIns = {
    getJson: typeof getJson;
    postJson: typeof postJson;
}

export const InterceptorProvider = defineComponent({
    // props: {
    //     request: {
    //         /* @ts-ignore */
    //         type: Function as PropType<Interceptor['request']>
    //     },
    //     response: {
    //         /* @ts-ignore */
    //         type: Function as PropType<Interceptor['reponse']>
    //     }
    // },
    props: [
        'request',
        'response'
    ],
    setup(props: Interceptor, ctx) {
        const { request, response } = props
        interceptors.request = request;
        interceptors.response = response;
        const methods = {
            getJson,
            postJson
        };
        provide<HttpIns>(httpProvide, methods)
        return () => ctx.slots.default!(methods)
    }
})

export function useHttp() {
    const httpIns = inject<HttpIns>(httpProvide)
    return httpIns!
}
`
  public app_vue: string = `<template>
  <interceptor-provider :response="response">
    <router-view class="view" />
  </interceptor-provider>
</template>

<script lang="ts" setup>
import { InterceptorProvider, ApiResult } from './hook/http'
import { setLoginState } from './store/auth'
import { useRouter } from 'vue-router'
// import './global.css'

const router = useRouter()

function response(res: ApiResult) {
  if (res.code === -40001) {
    setLoginState(false)
    router.replace('/')
    return Promise.reject(res)
  }
  return Promise.resolve(res)
}

</script>
`
  public home_vue: string = `<script lang="ts" setup>
  import { useHttp } from '../hook/http'

  const http = useHttp()

  async function getData() {
    const { code, data, detail } = await http.getJson<{ uuid: string; name: string; }[]>('/list');
    // code: number
  }
  `
}
