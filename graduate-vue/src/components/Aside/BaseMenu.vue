<template>
  <div class="multi-menu">
    <template v-for="(route, index) in routes">
      <el-sub-menu
        :index="new Date()"
        :key="index"
        v-if="!route.meta.hidden && route.children && route.children.length > 0"
      >
        <template v-slot:title>
          <i :class="route.meta.icon"></i>
          {{ route.meta.title }}
        </template>
        <MultiMenu :routes="route.children" />
      </el-sub-menu>
      <el-menu-item
        class="item"
        :index="parentPath + '/' + route.path"
        v-else-if="!route.meta.hidden"
        :key="index + 1"
      >
        <i :class="route.meta.icon"></i>
        <template v-slot:title>
          <span>{{ route.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    parentPath: String,
    routes: Object
  },
  name: 'MultiMenu',
  setup() {
    return {}
  }
}
</script>

<style></style>
