import { defineComponent, reactive, ref, h } from 'vue'

const img = require('./assets/logo.png') // eslint-disable-line

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'hhahh',
    })

    const numberRef = ref(123)

    setInterval(() => {
      state.name += '1'
      numberRef.value += 10
    }, 1000)

    return () => {
      const number = numberRef.value

      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{state.name + number}</p>
        </div>
      )
    }
  },
})
