import { createApp, defineComponent, h } from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'

import HelloWorld from './components/HelloWorld.vue'

const img = require('./assets/logo.png') // eslint-disable-line
// const App = defineComponent({
//   render() {
//     return 123
//   },
// })

const App = defineComponent({
  render() {
    return h('div', { id: 'app' }, [
      h('img', { alt: 'Vue logo', src: img }),
      h(HelloWorld, { msg: 'Welcome to your Vue.js + TS', age: 12 }),
    ])
  },
})

createApp(App).use(store).use(router).mount('#app')
