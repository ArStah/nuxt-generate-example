<template>
  <section class="container">
    This is category index page<br>
    there are categories:
    <template v-for="(ctg, name) in categories">
      <nuxt-link :key="name" :to="`/category/${name}`">{{name}}</nuxt-link><br>
    </template>
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

