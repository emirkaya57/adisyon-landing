<template>
  <div v-if="loading" id="loader-wrapper">
    <div id="loading">
      <img src="/images/cooking.gif" class="cssload-loader" alt="ishesap loading" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['loading']
};
</script>

<style></style>
