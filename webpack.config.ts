import { Configuration } from 'webpack'

export default {
    module: {
        rules: [
            {
                test: /\.(txt|pre|code|icon)$/i,
                use: 'raw-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
} as Configuration;