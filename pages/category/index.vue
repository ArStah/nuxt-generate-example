<template>
  <section class="container">
    This is Category index page<br>
    there are categories:
    <template v-for="(ctg) in categories">
      <nuxt-link :key="ctg.url" :to="`${ctg.url}`">{{ctg.data.name}}</nuxt-link><br>
    </template>
  </section>
</template>

<script>
  export default {
    asyncData({ payload}) {
      return {
        categories: payload,
      };
    },
  };
</script>

