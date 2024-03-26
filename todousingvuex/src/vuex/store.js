import { createStore } from "vuex";
const store = createStore({
  state: {
    todos: [],
    editing:false,
  },
  getters: {
    todosLength(state) {
      return state.todos.length;
    },
  },
  mutations: {
    setData(state, payload) {
      state.todos.push(payload);
    },
    deleteData(state, payload) {
        state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    editData(state, payload) {
        edit=true;
        console.log(payload);

    },
  },
});
export default store;
