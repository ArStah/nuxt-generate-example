<template>
  <section class="container">
    This is {{ sectionName }}<br>
    {{ data.param }}, {{ data.param2 }}
  </section>
</template>

<script>
  export default {
    asyncData({ params, payload }) {
      return {
        sectionName: params.subsection,
        data: payload,
      };
    },
  };
</script>

