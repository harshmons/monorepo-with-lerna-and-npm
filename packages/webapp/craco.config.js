const path = require('path');
const cracoBabelLoader = require('craco-babel-loader');
const resolvePackage = relativePath => path.resolve(__dirname,relativePath);

module.exports = {
    webpack:{
        alias:{
            react:resolvePackage('./node_modules/react')
        }
    },
    plugins:[
        {
            plugin:cracoBabelLoader,
            options:{
                includes:[resolvePackage('../library')],
                excludes:[/node_modules/]
            }
        }
    ]
}