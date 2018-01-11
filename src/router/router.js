import Main from '@/views/main.vue';
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    { path: 'home', title: 'home', name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } },
    { path: 'shopping', title: '购物详情', name: 'shopping', component: resolve => { require(['@/views/shopping/shopping-info.vue'], resolve); } }, // 用于展示带参路由
    { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['@/views/message/message.vue'], resolve); } }
  ]
}
export const appRouter = [
  {
      path: '/access',
      icon: 'key',
      name: 'access',
      title: '权限管理',
      component: Main,
      children: [
          { path: 'index', title: '权限管理', name: 'access_index', component: resolve => { require(['@/views/access/access.vue'], resolve); } }
      ]
  }
]
export const routers = [
    otherRouter,
    ...appRouter,
];
