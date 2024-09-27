<template>
  <table id="customers">
    <tr>
      <th>Todos</th>
      <th class="icon_sec">Actions</th>
    </tr>
    <tr v-for="data in todos" :key="data.id">
      <td v-if="!editing" class="data_sec">{{ data.todo }}</td>
      <td v-else>
        <input type="text" v-model="data.todo" @blur="handleBlur(data)" />
      </td>
      <td class="icon_sec" v-if="!editing">
        <span
          class="material-symbols-outlined delete"
          @click="handleDelete(data.id)"
          >delete</span
        >
        <span
          class="material-symbols-outlined edit"
          @click="editClick(data.id)"
        >
          edit_square
        </span>
      </td>
      <td v-else class="icon_sec">
        <v-btn class="btn" >Update</v-btn><v-btn @click="handleCancel">Cancel</v-btn>
      </td>
    </tr>
  </table>
</template>

<script>
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import { mapState } from "vuex";
export default {
  name: "TablePage",
  props: {
    handleEdit: Function,
  },
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    handleDelete(id) {
      this.$store.commit("deleteData", id);
    },
    editClick(id) {
      this.editing = true;
      // this.handleEdit(id);
    },
    // handleEdit(data,index){
    // console.log(data, "data", index,"index");
    // this.$store.commit('editData',{index,data});
    // }
    handleCancel(){
      this.editing=false
    }
  },
  computed: {
    ...mapState(["todos"]),
  },
};
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  /* background-color: #f2f2f2;*/
  background-color: #fdf9f9;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background: #6b80ca;
  color: white;
}
.delete {
  color: red;
  font-size: 20px;
  margin-right: 5px;
}
.delete:hover {
  cursor: pointer;
}
.edit {
  font-size: 20px;
}
.edit:hover {
  cursor: pointer;
}
.data_sec {
  width: 70%;
}
.icon_sec {
  text-align: center !important;
}
input {
  border: 1.5px solid #979595;
  width: 100%;
  padding: 2px 5px 2px 7px;
}
.btn {
  background: red;
  margin-right: 10px;
}
</style>