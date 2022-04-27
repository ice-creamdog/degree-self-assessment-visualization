<template>
  <div class="echarts-setting">
    <el-collapse accordion>
      <el-collapse-item title="图表标题" name="1">
        <el-scrollbar>
          <div><echarts-title /></div>
        </el-scrollbar>
      </el-collapse-item>
      <el-collapse-item title="图表图例" name="2">
        <el-scrollbar>
          <div><echarts-size /></div>
        </el-scrollbar>
      </el-collapse-item>
      <el-collapse-item title="网格样式" name="3">
        <el-scrollbar>
          <div><echarts-style /></div>
        </el-scrollbar>
      </el-collapse-item>
      <el-collapse-item title="坐标轴" name="4">
        <el-scrollbar>
          <div><echarts-axis /></div>
        </el-scrollbar>
      </el-collapse-item>
      <el-collapse-item title="提示工具" name="5">
        <el-scrollbar>
          <div><echarts-tooltips /></div>
        </el-scrollbar>
      </el-collapse-item>
      <el-collapse-item title="series" name="6">
        <el-scrollbar>
          <div><echarts-series /></div>
        </el-scrollbar>
      </el-collapse-item>
      <el-collapse-item title="颜色" name="7">
        <div><echarts-coloor /></div>
      </el-collapse-item>
      <el-collapse-item title="主题" name="8">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import EchartsTitle from './echarts-title.vue'
import EchartsSize from './echarts-legend.vue'
import EchartsStyle from './echarts-grid.vue'
import EchartsAxis from './echarts-axis.vue'
import echartsTooltips from './echarts-tooltips.vue'
import EchartsSeries from './echarts-series/index.vue'
import EchartsColoor from './echarts-color.vue'
</script>

<style>
.el-form-item {
  display: flex;
}
</style>
