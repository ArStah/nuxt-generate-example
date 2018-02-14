<template>
  <section class="container">
    This is category {{ name }}<br>
    {{ data.param }}, {{ data.param2 }}
  </section>
</template>

<script>
  export default {
    asyncData({ params, payload }) {
      return {
        name: params.name,
        data: payload,
      };
    },
  };
</script>

