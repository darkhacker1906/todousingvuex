<template>
  <div>
    <div class="m_div">
      <div>
        <h1>Todo App</h1>
      </div>
      <div class="main_div">
        <form @submit.prevent="handleSubmit(todo)">
          <input type="text" placeholder="Enter your todos" v-model="todo" />
          <v-btn  class="btn">Submit</v-btn>
        </form>
        <div v-if="todos.length > 0">
          <table-page :handleEdit="handleEdit"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TablePage from "./TablePage.vue";
import { mapState } from "vuex";
import { nanoid } from "nanoid";

export default {
  components: { TablePage },
  name: "TodoApp",
  data() {
    return {
      todo: "",
      editData: "",
    };
  },
  methods: {
    handleSubmit(todo) {
      if (this.todo.trim() !== "") {
        this.$store.commit("setData", { todo, completed: false, id: nanoid() });
        this.todo = "";
      }
    },
    handleEdit(todo) {
      console.log(todo);
      this.$store.state.editing == true;
    },
  },
  computed: {
    ...mapState(["todos"]),
  },
};
</script>

<style scoped>
.m_div {
  width: 100vw;
  height: 100vh;
  background: #e3e9ff;
  overflow-y: auto;
  padding: 20px;
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
form {
  margin-bottom: 20px;
}
input {
  background-color: rgb(236, 234, 234);
  border: 1px solid rgb(232, 231, 231);
  width: 100%;
  border-radius: 5px;
  padding: 3px 3px 3px 10px;
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
