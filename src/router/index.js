import Vue from 'vue';
import VueRouter from 'vue-router';
import Request from "../plugins/request";

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect:'/login'
}, {
  path: '/login',
  name: 'login',
  component: () => import('../components/login.vue'),
}, {
  path: '/public/index',
  name: 'index',
  component: () => import('../views/index.vue')
}];
const router = new VueRouter({
  routes,
});
// 全局路由守卫 拦截所有请求
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token'); //获取sessionStorage 的token  
  console.log(token,to.path)
  if(token){   //sessionStorage里面是否存在token
    Request.post('/checkToken',{},token).then(res=>{ //向后端发送token 验证是否 一致 
      next(); 
    }).catch(e=>{
      //  token 不对所以清除Session里面的token 返回首页
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('name')
      next("/")
    })
    //next();
  }
  else{ 
    if(to.path ==='/login'){    //判断当前没有token的sessionStorage是否下一个router连接
      next();
    }
    else{
      next("/login");
    }
  }
})
export default router;
