<template>
  <div>
    <div class="m_div">
      <div>
        <h1>Todo App</h1>
      </div>
      <div class="main_div">
        <form>
          <input type="text" placeholder="Enter your todos" v-model="todo"/>
          <v-btn class="btn">Submit</v-btn>
          <!-- <h1>{{$store.state}}</h1> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      todo:""
    };
  },
};
</script>

<style scoped>
.m_div {
  width: 100vw;
  height: 100vh;
  background: #E3E9FF;
}
.main_div {
  width: 60%;
  padding: 20px;
  background: #fff;
  margin: auto;
}
h1 {
  text-align: center;
  padding: 10px;
}
input {
  background-color: rgb(236, 234, 234);
  border: 1px solid rgb(232, 231, 231);
  width: 100%;
  border-radius: 5px;
  padding: 3px;
  height: 37px;
}
.btn {
  /* background: rgb(211, 210, 210); */
  background: #6b80ca;
  margin-top: 10px;
  font-weight: 700;
  color: #fff;
}
</style>
