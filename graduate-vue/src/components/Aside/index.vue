<template>
  <div class="aside">
    <el-menu :default-active="routes.path" router>
      <template v-for="(route, index) in routes">
        <el-sub-menu
          :index="index.toString()"
          v-if="!route.meta.hidden && route.children && route.children.length > 1"
          :key="index"
        >
          <template v-slot:title>
            <i :class="route.meta.icon"></i>
            <span>{{ route.meta.title }}</span>
          </template>
          <MultiMenu :parentPath="route.path" :routes="route.children" />
        </el-sub-menu>
        <Menu
          v-else-if="!route.meta.hidden && route.children && route.children.length === 1"
          :route="route.children[0]"
          :index="index"
          :key="index + 1"
        />
        <Menu v-else-if="!route.meta.hidden" :route="route" :key="index - 1" />
      </template>
    </el-menu>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Menu from './BaseMenuItem.vue'
import MultiMenu from './BaseMenu.vue'
export default {
  setup() {
    const router = new useRouter()
    let routes = router.options.routes.filter((item) => item.path === '/')[0].children
    console.log(routes[0])
    return {
      routes
    }
  },
  components: { Menu, MultiMenu }
}
</script>

<style lang="scss" scoped></style>
