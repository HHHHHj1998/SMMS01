<template>
    <div class="class-add">
        <!-- 面板组件 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>添加管理</span>
            </div>
            <div class="text item">
                <!-- 表单 -->
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :rules="rules">
                    <el-form-item label="所属分类">
                         <el-select v-model="formLabelAlign.userGroup" placeholder="--顶级分类--">
                            <el-option lable="普通用户" value="普通用户"></el-option>
                            <el-option lable="高级管理员" value="高级管理员"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="分类名称" prop="class">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-radio v-model="radio" label="1">启用</el-radio><el-radio v-model="radio" label="2">禁用</el-radio>  
                    </el-form-item>
                    <el-button type="primary" size="mini">添加</el-button>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            labelPosition:'top',
            radio: '1',
            formLabelAlign: {
            region: '',
            type: '',
            usergroup:''
        },
        rules:{
            class:[
                {required:true,message:"请输入分类",trigger:"blur"}
            ]
        }
        }
    }
};
</script>

<style lang ="less">
.class-add {
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
          margin-bottom: 40px;
          height:60px;
          height:60px;
          .el-form-item__label{
              height:40px;
          }
          .el-form-item__content{
              .el-radio{
                  margin-left:10px;    
              }
          }
        }
        .el-button{
                margin:10px 0;
        }
      }
    }
  }
}
</style>
