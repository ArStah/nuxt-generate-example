const data = {
  url: 'catégorie', //locale-depended url
  categories: [
    {
      url: 'premier',
      data: {
        name: 'Première catégorie',
        param: 'First Category param1',
        param2: 'First Category param2',
      }
    },
    {
      url: 'seconde',
      data: {
        name: 'Deuxième catégorie',
        param: 'Second Category param1',
        param2: 'Second Category param2',
      }
    },
  ],
};


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  router: {
    extendRoutes (routes, resolve) {
      return [
        {
          path: `/${data.url}`,
          component: resolve(__dirname, 'pages/category/index.vue')
        },
        {
          path: `/${data.url}/:name`,
          component: resolve(__dirname, 'pages/category/_name.vue')
        },
      ];
    }
  },
  generate: {
    routes() {
      const routes = [];

      routes.push({
        route: `/${data.url}`,
        payload: data.categories,
        component: `~/pages/category/index`
      });

      for (category of data.categories) {
        routes.push({
          route: `/${data.url}/${category.url}`,
          payload: category.data,
          component: `~/pages/category/_name`
        });
      }
      return routes;
    },
  },
};
