<template>
  <div class="main">
    <el-button type="primary">测试</el-button>
    <el-button type="primary">axios</el-button>
    <el-button type="primary" @click="getCode" class="getcode">获取验证码</el-button>
    <div id="main" style="width: 100px; height: 100px"></div>
  </div>
</template>

<script setup>
import { getCodeImg } from '@/api/index.js'
// import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
console.log(proxy, 'proxy', proxy.$echarts)

function getCode() {
  getCodeImg()
}
// 全局引入
setTimeout(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = proxy.$echarts.init(document.getElementById('main'))
  myChart.setOption({
    title: {
      text: '全局示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
}, 30)
// 单独引入
// import * as echarts from 'echarts'
// setTimeout(() => {
//   // 基于准备好的dom，初始化echarts实例
//   var myChart = echarts.init(document.getElementById('main'))
//   myChart.setOption({
//     title: {
//       text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     xAxis: {
//       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//     },
//     yAxis: {},
//     series: [
//       {
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//       }
//     ]
//   })
// }, 30)
</script>

<style lang="scss" scoped>
#id {
  color: red;
}
.main {
  .getcode {
    color: blue;
  }
}
</style>
