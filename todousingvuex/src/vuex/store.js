import { createStore } from "vuex";
 const store= createStore({
    state:{
        data:"Harry",
        arr:[],
    },
    mutations:{
        setData(state,payload){
            state.data=[...arr,payload.data]
        },
        deleteData(state,payload){

        },
        editData(state,payload){

        }
    },
    actions:{

    }
})
export default store;