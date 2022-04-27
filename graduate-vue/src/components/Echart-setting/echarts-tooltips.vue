<template>
  <div class="tooltips-setting">
    <el-form v-model="toolTips" size="small">
      <el-form-item label="show">
        <el-switch v-model="toolTips.show" />
      </el-form-item>
      <template v-if="toolTips.show">
        <el-form-item label="trigger">
          <el-select v-model="toolTips.trigger" placeholder="字体样式">
            <el-option label="item" value="item" />
            <el-option label="axis" value="axis" />
            <el-option label="none" value="none" />
          </el-select>
        </el-form-item>
        <el-form-item label="axisPointer">
          <el-form inline="true" v-model="toolTips.axisPointer" size="small">
            <el-form-item label="type">
              <el-select v-model="toolTips.axisPointer.type" placeholder="字体样式">
                <el-option label="line" value="line" />
                <el-option label="shadow" value="shadow" />
                <el-option label="none" value="none" />
                <el-option label="cross" value="cross" />
              </el-select>
            </el-form-item>
            <line-style
              v-if="toolTips.axisPointer.type === 'line'"
              :title="lineStyleTitle"
              @getLineStyle="getLineStyleData"
            />

            <el-collapse v-else-if="toolTips.axisPointer.type === 'shadow'" accordion>
              <el-collapse-item title="shadowStyle" name="1">
                <div>
                  <el-form inline="true" v-model="toolTips.axisPointer.shadowStyle" size="small">
                    <el-form-item label="color">
                      <el-color-picker
                        v-model="toolTips.axisPointer.shadowStyle.color"
                        show-alpha
                      ></el-color-picker>
                    </el-form-item>
                    <el-form-item label="shadowBlur">
                      <el-input-number
                        :step="1"
                        v-model="toolTips.axisPointer.shadowStyle.shadowBlur"
                      />
                    </el-form-item>
                    <el-form-item label="shadowColor">
                      <el-color-picker
                        v-model="toolTips.axisPointer.shadowStyle.shadowColor"
                        show-alpha
                      ></el-color-picker>
                    </el-form-item>
                    <el-form-item label="shadowXOffset">
                      <el-input-number
                        :step="1"
                        v-model="toolTips.axisPointer.shadowStyle.shadowXOffset"
                      />
                    </el-form-item>
                    <el-form-item label="shadowYOffset">
                      <el-input-number
                        :step="1"
                        v-model="toolTips.axisPointer.shadowStyle.shadowYOffset"
                      />
                    </el-form-item>
                    <el-form-item label="opacity">
                      <el-input-number v-model="toolTips.axisPointer.shadowStyle.opacity" />
                    </el-form-item>
                  </el-form>
                </div>
              </el-collapse-item>
            </el-collapse>
            <line-style
              :title="crossStyleTitle"
              v-else-if="toolTips.axisPointer.type === 'cross'"
              @getLineStyle="getCrossStyleData"
            />
          </el-form>
        </el-form-item>
        <el-form-item label="triggerOn">
          <el-select v-model="toolTips.triggerOn" placeholder="字体样式">
            <el-option label="mousemove" value="mousemove" />
            <el-option label="click" value="click" />
            <el-option label="mousemove|click" value="mousemove|click" />
            <el-option label="none" value="none" />
          </el-select>
        </el-form-item>
        <el-form-item label="backgroundColor">
          <el-color-picker v-model="toolTips.backgroundColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="borderColor">
          <el-color-picker v-model="toolTips.borderColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="borderWidth">
          <el-input-number v-model="toolTips.borderWidth" />
        </el-form-item>
        <el-form-item label="padding">
          <el-input-number v-model="toolTips.padding" />
        </el-form-item>
        <text-basic-style @getTextStyle="getTextStyleData" />
      </template>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue-demi'
import { useStore } from 'vuex'
import TextBasicStyle from '../fontStyle/index.vue'
import lineStyle from '../lineStyle/index.vue'
import { difference } from '@/utils/commonFun.js'

const toolTips = reactive({
  show: true,
  trigger: '',
  axisPointer: {
    type: 'none',
    lineStyle: {},
    shadowStyle: {
      color: null,
      shadowBlur: 0,
      shadowColor: null,
      shadowXOffset: 0,
      shadowYOffset: 0,
      opacity: 1
    },
    crossStyle: {}
  },
  triggerOn: '',
  backgroundColor: '',
  borderColor: '',
  borderWidth: 0,
  padding: 5,
  textStyle: {}
})
const baseToolTip = {
  show: true,
  trigger: '',
  axisPointer: {
    type: 'none',
    lineStyle: {},
    shadowStyle: {
      color: null,
      shadowBlur: 0,
      shadowColor: null,
      shadowXOffset: 0,
      shadowYOffset: 0,
      opacity: 1
    },
    crossStyle: {}
  },
  triggerOn: '',
  backgroundColor: '',
  borderColor: '',
  borderWidth: 0,
  padding: 5,
  textStyle: {}
}
const store = useStore()
const lineStyleTitle = 'lineStyle'
const crossStyleTitle = 'crossStyle'

const getLineStyleData = (e) => {
  console.log(e)
  toolTips.axisPointer.lineStyle = e
}

const getTextStyleData = (e) => {
  toolTips.textStyle = e
}

const getCrossStyleData = (e) => {
  toolTips.axisPointer.crossStyle = e
}
watch(
  toolTips,
  (newValue) => {
    // if (newValue.show) {
    const diffToolTip = difference(newValue, baseToolTip)

    const data = {
      key: 'tooltip',
      newValue: diffToolTip
    }
    console.log(data)
    store.commit('echartsOptions/setOptions', data)
    // } else {
    //   store.commit('echartsOptions/deleteProp', 'tooltip')
    // }
    console.log(store.state.echartsOptions.options)
  },
  {
    deep: true
  }
)
</script>

<style>
.el-form-item {
  margin-bottom: 0;
}
</style>
