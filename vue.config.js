module.exports = {
    //axios域代理，解决axios跨域问题
    baseUrl: '/',
    devServer: {
        proxy: {
            '': {
                target: 'http://www.wesufu.top',
                changeOrigin: true,
                ws: true,
                pathRewrite: {

                }
            }
        }
    }
}
