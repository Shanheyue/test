<template>
  <div class="container">
    <el-table :data="currentData" style="width:100%" border>
      <el-table-column prop="index" label="序号" header-align="center" width="100px"></el-table-column>
      <el-table-column prop="name" label="姓名" header-align="center" width="300px"></el-table-column>
      <el-table-column prop="age" label="年龄" header-align="center" width="170px"></el-table-column>
      <el-table-column prop="address" label="地址" header-align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tableData.length" @current-change="handleCurrentChange" @prev-click="handlePrevClick" @next-click="handleNextClick"></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'basic-table',
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10
    }
  },
  beforeMount() {
    for (let index = 0; index < 51; index++) {
      this.tableData[index] = {
        index: index + 1,
        name: '张三',
        age: 23,
        address: '江苏省无锡市新吴区'
      }
    }
  },
  computed: {
    currentData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      )
    }
  },
  methods: {
    handleCurrentChange(newCurrentPage) {
      this.currentPage = newCurrentPage
    },
    handlePrevClick(newCurrentPage) {
      this.currentPage = newCurrentPage
    },
    handleNextClick(newCurrentPage) {
      this.currentPage = newCurrentPage
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
}
</style>
