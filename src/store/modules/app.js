import {otherRouter, appRouter} from '@/router/router';
import Util from '@/libs/util';
const app = {
    state: {
      menuList: []
    },
    mutations: {
      updateMenulist (state) {
        let menuList = [];
        appRouter.forEach((item, index) => {
          console.log(item)
          if (item.children.length === 1) {
            menuList.push(item);
          } else {
            menuList.push(item);
          }
        })
        state.menuList = menuList;
      }
    }
};

export default app;
