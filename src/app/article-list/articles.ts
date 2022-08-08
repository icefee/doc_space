export type Article = {
    title: string;
    link: string;
    publishDate: string;
    tags: string[];
}

const articles: Article[] = [
    {
        title: '[flutter]使用MaterialBanner显示置顶的提醒',
        link: '/flutter/scaffold_message_material_banner',
        publishDate: '2022/08/08 17:24',
        tags: ['flutter']
    },
    {
        title: 'react-native-tvos 按键事件监听🚀',
        link: '/react/react_native_tvos_event_handler',
        publishDate: '2022/08/08 15:57',
        tags: ['react', 'react-native', 'react-native-tvos']
    },
    {
        title: 'vuejs自定义(模态)滚动条组件🚀',
        link: '/vuejs/custom_scrollbar',
        publishDate: '2022/07/28 13:36',
        tags: ['vuejs']
    },
    {
        title: 'react @mui/material Snackbar组件封装自定义hook🚀',
        link: '/react/snackbar_hook',
        publishDate: '2022/07/28 10:13',
        tags: ['react', 'material-ui']
    },
    {
        title: 'vuejs(3.x)自定义hook返回渲染函数🚀',
        link: '/vuejs/hook_with_render_function',
        publishDate: '2022/07/26 14:50',
        tags: ['vuejs']
    },
    {
        title: 'vuejs(3.x)路由(vue-router)导航遗言参数🚀',
        link: '/vuejs/router_navigate_lastword',
        publishDate: '2022/06/04 09:40',
        tags: ['vuejs', 'vue-router']
    },
    {
        title: 'vuejs(3.x)中请求/响应拦截的实现🚀',
        link: '/vuejs/api_interceptor',
        publishDate: '2022/05/30 17:15',
        tags: ['vuejs', 'fetch']
    },
    {
        title: 'css蒙板剪裁自定义形状属性clip-path🍃',
        link: '/css/clip_path',
        publishDate: '2022/05/25 15:58',
        tags: ['css']
    },
    {
        title: 'css背景滤镜backdrop-filter🍃',
        link: '/css/backdrop_filter',
        publishDate: '2022/05/25 11:35',
        tags: ['css']
    },
    {
        title: '获取Chrome调试面板中筛选的请求列表🚀',
        link: '/chrome/get_request_list',
        publishDate: '2022/05/25 10:02',
        tags: ['chrome']
    },
    {
        title: 'css背景剪裁background-clip实现文字颜色特效🍃',
        link: '/css/background_clip',
        publishDate: '2022/05/25 09:20',
        tags: ['css']
    }
];

export default articles;
