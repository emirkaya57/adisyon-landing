<template>
  <div v-if="loading" id="loader-wrapper">
    <div id="loading">
      <img
        src="/images/ishesap-loading-2.gif"
        class="cssload-loader"
        alt="ishesap loading"
      />
    </div>
  </div>
</template>

<script>
export default {
  props:['loading']
};
</script>

<style></style>
