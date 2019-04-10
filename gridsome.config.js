module.exports = {
  siteName: `Nimiq GPU miner done right! - NoncerPro`,
  titleTemplate: `%s - Nimiq GPU miner`,
  siteDescription:"NoncerPro is a powreful GPU miner with local statistics API and is compatible with HiveOS.",
  siteUrl: "https://nonce.pro",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/posts/*.md',
        typeName: 'BlogPost',
        route: 'blog/:slug',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'benchmarks.json',
        typeName: 'Benchmark',
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/exclude-me']
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-70916517-8'
      }
    },
  ],
  chainWebpack (config) {
    config.mode('development')
  }
}


