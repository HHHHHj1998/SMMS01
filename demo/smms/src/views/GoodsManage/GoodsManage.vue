<template>
  <div class="goods-manage">
    <!-- 面板组件 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品管理</span>
      </div>
      <div class="text item">
        <el-select v-model="goodsManageForm.userGroup" placeholder="--顶级分类--">
          <el-option lable="普通用户" value="普通用户"></el-option>
          <el-option lable="高级管理员" value="高级管理员"></el-option>
        </el-select>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      goodsManageForm:{
        userGroup:""
      }
    }
  }
};
</script>

<style lang ="less">
.goods-manage {
  .el-card {
    .el-card__header {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      background-color: #f1f1f1;
    }
    .el-card__body {
      text-align: left;
      .el-form {
        width: 290px;
        .el-form-item {
          margin-bottom: 24px;
        }
      }
    }
  
  }
}
</style>
