<template>
  <div class="main_div">
    <h1>{{ $route.params.id }} Homepage</h1>
    <h1>Hello</h1>
    <router-link :to="{ name:'profile', params: { username: 'erina' } }">Click here</router-link>
  </div>
</template>
<script>
export default {
  name: "Homepage",
};
</script>

<style scoped>
.main_div {
  height: 100vh;
  width: 100vw;
  background: #e3e9ff;
}
h1 {
  text-align: center;
}
</style>
