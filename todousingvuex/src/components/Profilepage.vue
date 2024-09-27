<template>
<h1>This is my profile page</h1>
<h1>{{$route.params.username}}</h1>
</template>

<script>
export default {
name:"Profilepage",
//  created() {
//     const data = this.$route.params.username;
//     console.log('Username:', data);
//   }
}
</script>

<style scoped>
h1{
    text-align: center;
}
</style>