const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//  const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'

index_path=""
if(devMode)
index_path="./public";
else
index_path= "./";


module.exports = {
    // mode: "production",

    devtool: "source-map",
    entry:[ 
            path.join(__dirname, '/src/index.tsx'),
    ],

    resolve: {
        extensions: [".ts", ".tsx", ".js",".css"]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './'
    },

    module: {
        rules: [
            {
                // test: /(?<!\.d)\.tsx?$/,
                test: /\.ts(x?)$/,
                // exclude: /(node_modules|src_old|smarthire)/,
                use: [
                    {
                        loader: "ts-loader",
                        // query: {
                        //     cacheDirectory: true,
                        //     presets: ['react', 'es2015']
                        //   },
                        options: {
                            transpileOnly: true,
                            happyPackMode: true,
                            configFile: path.join(__dirname, 'tsconfig.json'),
                        },
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', 
                exclude: /(node_modules|src_old|smarthire)/,
                // options: {
                //     presets: ['es2015','env','@babel/preset-env']
                // }
                options: {
                    transpileOnly: true,
                    happyPackMode: true,
                    configFile: path.join(__dirname, 'babelconfig.json'),
                },
            },
            // {
            //     test: /\.scss$/,     
            //     use: [
            //       {
            //         loader: 'style-loader',
            //       },
            //       {
            //         loader: 'css-loader',
            //         options: {
            //           sourceMap: true,
            //           importLoaders: 2,
            //         },
            //       },
            //       { loader: 'scoped-css-loader' },
            //       {
            //         loader: 'sass-loader',
            //       },
            //     ],
            //   },
            
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
              }
              ,
            {
                test: /\.css$/,                
                loader: 'style-loader!css-loader',
                

            },

            {
                test: /\.(svg|png|jpg|jpeg|gif")$/,
                use: [
                    {
                        loader: "file-loader"
                    },

                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    //     "react-router": "ReactRouter"
    // },
    plugins: [
        
        // new ForkTsCheckerWebpackPlugin({
        //     tslint: true,      // change to 'true' later
        //     useTypescriptIncrementalApi: true,
        //     checkSyntacticErrors: true,
        // }),
        
    ],
    // plugins: [
    //     new HtmlWebpackPlugin({
    //       template: './proj/index.html'
    //     })
    //   ]
    //   ,
    devServer: {
        publicPath: "/",
        contentBase: index_path,
        historyApiFallback: {
            index: '404.html'
          },
        hot: true,
        // port: 3000,
        proxy: {
            "/api": {
              target: "http://localhost:8000",
              pathRewrite: {
                '^/api/admin/': '/admin/',
                '^/api/adduser/': '/adduser/',
                '^/api/adddriver/': '/adddriver/',
                '^/api/login_user/': '/login_user/',
                '^/api/login_driver/': '/login_driver/',
                '^/api/login_status/': '/login_status/',
                '^/api/logout_user/': '/logout_user/',
                '^/api/get_ride_details/': '/get_ride_details/',
                '^/api/add_ride/': '/add_ride/',
              }
            }
          }
    },
};










// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.tsx',
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js']
//   },
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'bundle.min.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         exclude: /(node_modules|src_old|smarthire)/,
//         loader: 'awesome-typescript-loader'
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './proj/index.html'
//     })
//   ]
// }











// var BUILD_DIR = path.resolve(__dirname, './dist');
// var APP_DIR = path.resolve(__dirname, './src/');

// var config = {
//   entry: APP_DIR + '/index.tsx',
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   }
// };

//  module : {
//     loaders: [
//       { test: /\.tsx?$/,  loaders: [
//         'react-hot-loader',
//         'awesome-typescript-loader'
//     ], exclude: /node_modules/ }
//     ]
//   }

// module.exports = config;