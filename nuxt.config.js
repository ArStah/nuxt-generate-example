module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  generate: {
    routes() {
      const sections = {
        category: {
          first: {
            param: 'First Category param1',
            param2: 'First Category param2',
          },
          second: {
            param: 'Second Category param1',
            param2: 'Second Category param2',
          },
        },
        otherSection: {
          first: {
            param: 'First otherSection param1',
            param2: 'First otherSection param2',
          },
          second: {
            param: 'Second otherSection param1',
            param2: 'Second otherSection param2',
          },
        }
      };
      const routes = [];
      Object.entries(sections).forEach(([sectionName, section]) => {
        routes.push({
          route: `/${sectionName}`,
          payload: section,
        });
        Object.entries(section).forEach(([subSectionName, subSection]) => {
          routes.push({
            route: `/${sectionName}/${subSectionName}`,
            payload: subSection,
          });
        });
      });
      return routes;
    }
  }
}
