<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item, index) in columns" :key="index">{{item.title}}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(rowItem, rowIndex) in data" :key="rowIndex">
        <td v-for="(colItem, colIndex) in columns" :key="colIndex">
          <template v-if="'render' in colItem">
            <render :row="rowItem" :column="colItem" :index="rowIndex" :render="colItem.render"></render>
          </template>
          <template v-else>
            {{rowItem[colItem.key]}}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Render from './render'
export default {
  name: 'ITable',
  components: {
    Render
  },
  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}

</script>
<style lang='scss'>
  table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
  }
  table th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
  table td, table th{
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
</style>
