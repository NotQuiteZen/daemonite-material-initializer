// Webpack config

module.exports = env => {

    console.log(`Running in ${env} mode.`);

    return {

        mode: env,

        entry: {
            'lib/daemonite-material-initializer': './index.js',
        },

        output: {
            path: __dirname,
            filename: '[name].js',
            library: 'daemonite-material-initializer',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },

        devServer: {
            publicPath: '/',
            host: "0.0.0.0"
        },

        externals: {
            jquery: 'jquery',
            'daemonite-material': 'daemonite-material',
            'daemonite-material/js/material': 'daemonite-material/js/material',
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    }
                }
            ]
        }
    };
};
