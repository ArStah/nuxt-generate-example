<template>
  <section class="container">
    This is category {{ name }}<br>
    {{ data.param1, data.param2 }}
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

