import Main from '@/views/main.vue';
// 不作为Main组件的子页面展示的页面单独写，如下


// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
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
// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
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
  },
  {
      path: '/access-test',
      icon: 'lock-combination',
      title: '权限测试页',
      name: 'accesstest',
      access: 0,
      component: Main,
      children: [
          { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: resolve => { require(['@/views/access/access-test.vue'], resolve); } }
      ]
  },
  {
      path: '/component',
      icon: 'social-buffer',
      name: 'component',
      title: '组件',
      component: Main,
      children: [
          {
              path: 'text-editor',
              icon: 'compose',
              name: 'text-editor',
              title: '富文本编辑器',
              component: resolve => { require(['@/views/my-components/text-editor.vue'], resolve); }
          },
          {
              path: 'md-editor',
              icon: 'pound',
              name: 'md-editor',
              title: 'Markdown编辑器',
              component: resolve => { require(['@/views/my-components/markdown-editor.vue'], resolve); }
          },
          {
              path: 'image-editor',
              icon: 'crop',
              name: 'image-editor',
              title: '图片预览编辑',
              component: resolve => { require(['@/views/my-components/image-editor.vue'], resolve); }
          },
          {
              path: 'draggable-list',
              icon: 'arrow-move',
              name: 'draggable-list',
              title: '可拖拽列表',
              component: resolve => { require(['@/views/my-components/draggable-list.vue'], resolve); }
          },
          {
              path: 'area-linkage',
              icon: 'ios-more',
              name: 'area-linkage',
              title: '城市级联',
              component: resolve => { require(['@/views/my-components/area-linkage.vue'], resolve); }
          },
          {
              path: 'file-upload',
              icon: 'android-upload',
              name: 'file-upload',
              title: '文件上传',
              component: resolve => { require(['@/views/my-components/file-upload.vue'], resolve); }
          },
          {
              path: 'count-to',
              icon: 'arrow-graph-up-right',
              name: 'count-to',
              title: '数字渐变',
              component: resolve => { require(['@/views/my-components/count-to.vue'], resolve); }
          }
          // {
          //     path: 'clipboard-page',
          //     icon: 'clipboard',
          //     name: 'clipboard-page',
          //     title: '一键复制',
          //     component: resolve => { require(['@/views/my-components/clipboard/clipboard.vue'], resolve); }
          // }
      ]
  },
  {
      path: '/form',
      icon: 'android-checkbox',
      name: 'form',
      title: '表单编辑',
      component: Main,
      children: [
          {
            path: 'artical-publish',
            title: '文章发布',
            name: 'artical-publish',
            icon: 'compose',
            component: resolve => { require(['@/views/form/article-publish.vue'], resolve); }
          },
          {
            path: 'workflow',
            title: '工作流',
            name: 'workflow',
            icon: 'arrow-swap',
            component: resolve => { require(['@/views/form/work-flow.vue'], resolve); }
          }
      ]
  },
  {
      path: '/tables',
      icon: 'ios-grid-view',
      name: 'tables',
      title: '表格',
      component: Main,
      children: [
          { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: resolve => { require(['@/views/tables/dragable-table.vue'], resolve); } },
          { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: resolve => { require(['@/views/tables/editable-table.vue'], resolve); } },
          { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: resolve => { require(['@/views/tables/searchable-table.vue'], resolve); } },
          { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: resolve => { require(['@/views/tables/exportable-table.vue'], resolve); } },
          { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: resolve => { require(['@/views/tables/table-to-image.vue'], resolve); } }
      ]
  }
]
export const routers = [
    otherRouter,
    ...appRouter,
];
