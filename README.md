# NoncerPro Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/57615edf-5671-4611-b392-9300aef500b3/deploy-status)](https://app.netlify.com/sites/flamboyant-ramanujan-501782/deploys)


## How to develop

1. Install `gridsome`
```
npm install --global @gridsome/cli
```
2. Clone this repo
3. `cd` to the repo and `npm install`
4. `gridsome develop`

## How to add articles
Just add your `.md` file to `blog` directory and add it's metadate at the top of the file:
```
---
title: Title fo the article
date: 2018-10-24 23:43:55
description: "This is just to see if this works"
image: "./images/sergei-akulich-457851-unsplash.jpg"
slug: unique-slug
---
```
and run `gridsome develop`

## How to submit GPU benchmarks
Just edit `benchmarks.json` file and send a PR.
