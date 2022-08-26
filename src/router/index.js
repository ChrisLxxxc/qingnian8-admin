import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Login = () => import('@/views/login/Login')
const Home = () => import('@/views/home/Home')
const Welcome = () => import('@/views/welcome/Welcome')
const Alluser = () => import('@/views/alluser/Alluser')
const Adduser = () => import('@/views/adduser/Adduser')
const Datauser = () => import('@/views/datauser/Datauser')

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      }, {
        path: '/all',
        component: Alluser
      }, {
        path: '/add',
        component: Adduser
      }, {
        path: '/data',
        component: Datauser
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    return next()
  }
  var token = window.sessionStorage.getItem('token')
  if (!token) {
    return next({ path: '/login' })
  }
  next()
})

export default router
