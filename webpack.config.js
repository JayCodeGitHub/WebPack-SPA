const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html', 
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '.',
                    globOptions: {
                        ignore: ['**/index.html'], 
                      },
                  },
            ],
          }),
      ],
      
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    }
}