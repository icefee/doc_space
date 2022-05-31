import { Configuration } from 'webpack'

export default {
    module: {
        rules: [
            {
                test: /\.(txt|pre|code)$/i,
                use: 'raw-loader',
            },
        ],
    },
} as Configuration;