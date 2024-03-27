import { createWebHistory, createRouter } from 'vue-router'
import TodoApp from './components/TodoApp.vue';
import Homepage from '../src/components/Homepage.vue';
import NotFound from '../src/components/NotFound.vue';
import Profilepage from '../src/components/Profilepage.vue';
import DataList from '../src/components/DataList.vue';

 const routes = [
  { path: '/', component: TodoApp },
  {path:'/home', component:Homepage},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {path:'/home/:id', component:Homepage},
  {
    path: '/home/profile',
    component: Profilepage,
    children: [
      {
        path: 'data', 
        component: DataList
      }
    ]
  },
  
]
 const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;