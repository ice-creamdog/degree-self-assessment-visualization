<template>
  <div class="base-menu-item">
    <el-menu-item :index="route.path" :key="index">
      <i :class="route.meta.icon"></i>
      <span slot="title">{{ route.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  props: {
    route: Object
  },
  setup() {
    const index = new Date()
    return {
      index
    }
  }
}
</script>

<style></style>
