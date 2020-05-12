
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'index': path.join(__dirname, './src/frame/index.js')
    },
    output: {
        path: path.join(__dirname, './lib'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        chunkFilename: '[name].js'
    },
    devtool: 'cheap-module-source-map',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        'transform-class-properties'
                    ]
                }
            }
        }, {
            test: /\.less/,
            use: {
                loader: 'less-loader'
            }
        }]
    }
};