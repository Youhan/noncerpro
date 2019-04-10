module.exports = {
  siteName: `Best Nimiq GPU miner - NoncerPro`,
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
