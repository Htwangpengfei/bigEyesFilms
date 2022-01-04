module.exports={
    devServer:{
        // 配置网络代理，解决跨域问题---vue网络代理/axios网络代理
        proxy:{
            '/api':{
                target:"https://m.maoyan.com",
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}