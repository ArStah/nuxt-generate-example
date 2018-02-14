<template>
  <section class="container">
    This is {{ data.name }}<br>
    {{ data.param }}, {{ data.param2 }}
  </section>
</template>

<script>
  export default {
    asyncData({ params, payload }) {
      return {
        categoryName: params.name,
        data: payload,
      };
    },
  };
</script>

