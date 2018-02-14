<template>
  <section class="container">
    This is {{ sectionName }} index page<br>
    there are categories:
    <template v-for="(ctg, subsectionName) in subsections">
      <nuxt-link :key="subsectionName" :to="`/${sectionName}/${subsectionName}`">{{subsectionName}}</nuxt-link><br>
    </template>
  </section>
</template>

<script>
  export default {
    asyncData({params, payload}) {
      return {
        sectionName: params.section,
        subsections: payload,
      };
    },
  };
</script>

