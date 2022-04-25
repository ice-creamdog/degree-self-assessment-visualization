<template>
  <div class="echarts-setting">
    <el-collapse accordion>
      <el-collapse-item title="图表标题" name="1">
        <el-scrollbar>
          <div><echarts-title /></div>
        </el-scrollbar>
        <div><echarts-title /></div>
      </el-collapse-item>
      <el-collapse-item title="图表容器" name="2">
        <el-scrollbar></el-scrollbar>
        <div><echarts-size /></div>
      </el-collapse-item>
      <el-collapse-item title="图表样式" name="3">
        <el-scrollbar></el-scrollbar>
        <div><echarts-style /></div>
      </el-collapse-item>
      <el-collapse-item title="坐标轴" name="4">
        <el-scrollbar></el-scrollbar>
        <div><echarts-axis /></div>
      </el-collapse-item>
      <el-collapse-item title="提示工具" name="5">
        <el-scrollbar></el-scrollbar>
        <div><echarts-tooltips /></div>
      </el-collapse-item>
      <el-collapse-item title="图例" name="6">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
          可以选择模型，可以编辑图表容器大小、样式、数据集、坐标轴、数据转换、
          视觉映射、图例、事件行为，预展示
        </div>
      </el-collapse-item>
      <el-collapse-item title="事件行为" name="7">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
          可以选择模型，可以编辑图表容器大小、样式、数据集、坐标轴、数据转换、
          视觉映射、图例、事件行为，预展示
        </div>
      </el-collapse-item>
      <el-collapse-item title="主题" name="8">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
          可以选择模型，可以编辑图表容器大小、样式、数据集、坐标轴、数据转换、
          视觉映射、图例、事件行为，预展示
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import EchartsTitle from './echarts-title.vue'
import EchartsSize from './echarts-size.vue'
import EchartsStyle from './echarts-style.vue'
import EchartsAxis from './echarts-axis.vue'
import echartsTooltips from './echarts-tooltips.vue'
</script>

<style>
.el-form-item {
  display: flex;
}
</style>
