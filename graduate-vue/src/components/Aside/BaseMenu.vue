<template>
  <div class="multi-menu">
    <template v-for="(route, index) in routes">
      <el-submenu
        :index="new Date()"
        :key="index"
        v-if="!route.meta.hidden && route.children && route.children.length > 0"
      >
        <template v-slot="title">
          <i :class="route.meta.icon"></i>
          {{ route.meta.title }}
        </template>
        <MultiMenu :routes="route.children" />
      </el-submenu>
      <el-menu-item :index="route.path" v-else-if="!route.meta.hidden" :key="index"></el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    routes: Object
  },
  name: 'MultiMenu',
  setup() {
    return {}
  }
}
</script>

<style></style>
