module.exports = {
  siteName: `Nimiq GPU miner done right! - NoncerPro`,
  titleTemplate: `%s - Nimiq GPU miner`,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: 'blog/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'benchmarks.json',
        typeName: 'Benchmark',
      }
    }
  ]
}
