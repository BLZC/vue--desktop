import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
};

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: '/index',
      component: () => import('../views/Home')
      // children: [
      //   // 首页
      //   {
      //     path: '/index',
      //     name: 'index',
      //     meta: { title: '门户首页' },
      //     component: () => import('../views/home')
      //   }
      // ]
    },
    {
      path: '*',
      component: () => import('../errorPage/404')
    }
  ]
});

/**
 * 导航守卫
 *  1. 根据登录状态
 *  2. 根据用户权限（尚待完成）
 */
// router.beforeEach((to, from, next) => {
//   if (localStorage.getItem('user')) {
//     next();
//   } else {
//     if (to.path === '/login') {
//       next();
//     } else {
//       next({
//         path: '/login'
//       });
//     }
//   }
// });

export default router;
