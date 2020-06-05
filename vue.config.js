module.exports = { // 在这里设置路径是因为发布到github pages上的时候，url存在子路径
  publicPath: process.env.NODE_ENV === 'production' ? '/circledemo' : '/'
}
