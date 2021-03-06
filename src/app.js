import Vue from 'vue';
import App from 'views/App.vue';
import createRouter from 'router';
import createStore from 'store';

Vue.config.debug = true;

// 这个函数被客户端和服务端共享，分别在客户端入口文件和服务端入口文件中使用
// 避免状态单例
// Node.js 服务器是一个长期运行的进程。当我们的代码进入该进程时，它将进行一次取值并留存在内存中。这意味着如果创建一个单例对象，它将在每个传入的请求之间共享。
export default function createApp () {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    name: 'rootVue', // 方便调试
    router,
    store,
    render: h => h(App),
  });

  return { app, router, store };
}