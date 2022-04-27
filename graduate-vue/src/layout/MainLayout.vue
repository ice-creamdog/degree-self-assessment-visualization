<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px"><Aside></Aside></el-aside>
        <el-main>
          <router-view v-slot="{ Component, route }">
            <transition name="fade-transform" mode="out-in">
              <keep-alive :max="10">
                <component class="component" :is="Component" :key="route.path" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '../components/Aside/index.vue'
export default {
  components: { Aside }
}
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  overflow: hidden;
}
.el-container {
  height: 100%;
  overflow: hidden;
}
.common-layout .el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
}
.common-layout .el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
}
.el-main {
  overflow: hidden;
  height: 100%;
}
.component {
  height: 100%;
}
</style>
