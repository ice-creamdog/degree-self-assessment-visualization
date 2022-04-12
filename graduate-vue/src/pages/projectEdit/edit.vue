<template>
  <div class="project-edit">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="custom-tree-container">
          <p>Using scoped slot</p>
          <el-tree :data="dataSource" show-checkbox node-key="id" :expand-on-click-node="false">
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <span>{{ node.label }}</span>
                <span>
                  <a @click="append(data)">Append</a>
                  <a @click="remove(node, data)">Delete</a>
                </span>
              </span>
            </template>
          </el-tree>
        </div>
      </el-col>
      <el-col :span="12">
        <span class="example-demonstration">Child options expand when hovered</span>
        <el-cascader v-model="value" :options="options" :props="props" @change="handleChange" />
      </el-col>
    </el-row>
    <el-row :gutter="20" class="show">
      <el-col :span="12" class="resource-data">
        <el-table :data="tableData" style="width: 100%" max-height="500">
          <el-table-column prop="date" label="Date" width="150" />
          <el-table-column label="Delivery Info">
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column label="Address Info">
              <el-table-column prop="state" label="State" width="120" />
              <el-table-column prop="city" label="City" width="120" />
              <el-table-column prop="address" label="Address" />
              <el-table-column prop="zip" label="Zip" width="120" />
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12" class="pre-show">
        <el-form :model="form" label-width="120px">
          <el-form-item label="Activity name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>预览</el-button>
          </el-form-item>
        </el-form>
        <el-button type="text" @click="dialogTableVisible = true">预览</el-button>

        <el-dialog v-model="dialogTableVisible" title="Shipping address">
          <div>引入echarts</div>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}

let id = 1000

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }
]

const append = (data: Tree) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1'
          },
          {
            id: 10,
            label: 'Level three 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1'
      },
      {
        id: 6,
        label: 'Level two 2-2'
      }
    ]
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1'
      },
      {
        id: 8,
        label: 'Level two 3-2'
      }
    ]
  }
])

const value = ref([])

const props = {
  expandTrigger: 'hover'
}

const handleChange = (value) => {
  console.log(value)
}

const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency'
          },
          {
            value: 'feedback',
            label: 'Feedback'
          },
          {
            value: 'efficiency',
            label: 'Efficiency'
          },
          {
            value: 'controllability',
            label: 'Controllability'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation'
          },
          {
            value: 'top nav',
            label: 'Top Navigation'
          }
        ]
      }
    ]
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout'
          },
          {
            value: 'color',
            label: 'Color'
          },
          {
            value: 'typography',
            label: 'Typography'
          },
          {
            value: 'icon',
            label: 'Icon'
          },
          {
            value: 'button',
            label: 'Button'
          }
        ]
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio'
          },
          {
            value: 'checkbox',
            label: 'Checkbox'
          },
          {
            value: 'input',
            label: 'Input'
          },
          {
            value: 'input-number',
            label: 'InputNumber'
          },
          {
            value: 'select',
            label: 'Select'
          },
          {
            value: 'cascader',
            label: 'Cascader'
          },
          {
            value: 'switch',
            label: 'Switch'
          },
          {
            value: 'slider',
            label: 'Slider'
          },
          {
            value: 'time-picker',
            label: 'TimePicker'
          },
          {
            value: 'date-picker',
            label: 'DatePicker'
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker'
          },
          {
            value: 'upload',
            label: 'Upload'
          },
          {
            value: 'rate',
            label: 'Rate'
          },
          {
            value: 'form',
            label: 'Form'
          }
        ]
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table'
          },
          {
            value: 'tag',
            label: 'Tag'
          },
          {
            value: 'progress',
            label: 'Progress'
          },
          {
            value: 'tree',
            label: 'Tree'
          },
          {
            value: 'pagination',
            label: 'Pagination'
          },
          {
            value: 'badge',
            label: 'Badge'
          }
        ]
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert'
          },
          {
            value: 'loading',
            label: 'Loading'
          },
          {
            value: 'message',
            label: 'Message'
          },
          {
            value: 'message-box',
            label: 'MessageBox'
          },
          {
            value: 'notification',
            label: 'Notification'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu'
          },
          {
            value: 'tabs',
            label: 'Tabs'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb'
          },
          {
            value: 'dropdown',
            label: 'Dropdown'
          },
          {
            value: 'steps',
            label: 'Steps'
          }
        ]
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog'
          },
          {
            value: 'tooltip',
            label: 'Tooltip'
          },
          {
            value: 'popover',
            label: 'Popover'
          },
          {
            value: 'card',
            label: 'Card'
          },
          {
            value: 'carousel',
            label: 'Carousel'
          },
          {
            value: 'collapse',
            label: 'Collapse'
          }
        ]
      }
    ]
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components'
      },
      {
        value: 'sketch',
        label: 'Sketch Templates'
      },
      {
        value: 'docs',
        label: 'Design Documentation'
      }
    ]
  }
]

// do not use same name with ref
const form = reactive({
  name: ''
})

const onSubmit = () => {
  console.log('submit!')
}

const dialogTableVisible = ref(false)
</script>

<style scss scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
