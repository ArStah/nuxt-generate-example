<template>
  <section class="container">
    This is category index page<br>
    there are categories:
    <nuxt-link v-for="(ctg, name) in categories" :key="name" :to="`/category/${name}`">{{name}}</nuxt-link><br>
  </section>
</template>

<script>
  export default {
    asyncData({payload}) {
      return {
        categories: payload,
      };
    },
  };
</script>

