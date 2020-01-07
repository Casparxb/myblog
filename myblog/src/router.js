import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import SingBlog from './components/SingBlog.vue'
import EditBlog from './components/EditBlog.vue'

const router = new VueRouter({
    routes: [
        { path: "/", component: ShowBlogs },
        { path: "/addblog", component: AddBlog },
        { path: "/blog/:id", component: SingBlog },
        { path: "/edit/:id", component: EditBlog },
    ],
    mode: 'history'
})

export default router