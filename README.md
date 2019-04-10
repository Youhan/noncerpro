# NoncerPro Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/da7905f0-11c1-4e01-a083-9e6a5f3f1cd8/deploy-status)](https://app.netlify.com/sites/infallible-khorana-6cb47b/deploys)


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
