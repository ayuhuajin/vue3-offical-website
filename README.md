# vue3-offical-website

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

```sh
引入 unplugin-auto-import插件
without(没引入前)
import { computed, ref } from 'vue'
const count = ref(0)
const doubled = computed(() => count.value \* 2)

with(引入后)
const count = ref(0)
const doubled = computed(() => count.value \* 2)
```

```
引入vite-plugin-vue-setup-extend插件

<script lang="ts" setup name="OrderList">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('mounted===')
})
</script>
```
