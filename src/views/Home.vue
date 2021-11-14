<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="12" />
    <p>{{ name }} : {{ name2 }} - {{ ref2 }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup(props, { slots, attrs, emit }) {
    // const state = reactive({
    //   name: 'joker',
    // })
    // { value: xxxx }
    const nameRef = ref('joker')
    const ref2 = ref(123)

    setInterval(() => {
      nameRef.value += '1'
      ref2.value += 10
    }, 1000)

    const computedName = computed(() => {
      return nameRef.value + '2'
    })

    watchEffect(() => {
      console.log(nameRef.value)
    })

    // return state
    return {
      name: nameRef,
      name2: computedName,
      ref2,
    }
  },
})
</script>
// sfc single file component
