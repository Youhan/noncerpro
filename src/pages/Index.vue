<template>
  <Layout>
    <div class="page-body">
      <hero/>
      <div class="section">
        <div class="container">
          <h2 class="is-size-3 m-t-lg">Latest Articles</h2>
          <div class="articles-list columns is-multiline">
            <div class="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet" v-for="{ node } in $page.allBlogPost.edges.slice(0,3)" :key="node.id">
              <router-link class="np-article" :to="node.path">
                <div class="img-wrapper">
                  <img :src="node.image.src" class="featured-image"/>
                </div>
                <div class="inner">
                  <h2 class="is-size-5" v-html="node.title"/>
                  <div class="desc" v-html="node.description"/>
                </div>
                <div class="date" v-html="node.date"/>
              </router-link>
            </div>
            <div class="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet">
              <g-link class="np-article __link" :to="{ name: 'blog' }">
                <ul>
                  <li v-for="{ node } in $page.allBlogPost.edges.slice(3,8)" :key="node.id">
                    <p class="is-marginless" v-html="node.title"></p>
                  </li>
                </ul>
                <div class="link">View All <i class="fas fa-arrow-right"></i></div>
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <benchmark/>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <dev-fee/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Home {
  allBlogPost (perPage: 8) {
    edges {
      node {
        id
        title
        date (format: "D MMMM, YYYY")
        description
        path
        image
      }
    }
  }
}
</page-query>

<script>
import Hero from '~/components/sections/Hero.vue'
import QuickStart from '~/components/sections/QuickStart.vue'
import Benchmark from '~/components/sections/Benchmark.vue'
import DevFee from '~/components/sections/DevFee.vue'

export default {
  components: {
    Hero,
    QuickStart,
    Benchmark,
    DevFee
  }
}
</script>
