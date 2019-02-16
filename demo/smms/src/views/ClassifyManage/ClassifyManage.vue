<template>
    <div class="account-manage">
        <!-- 面板组件 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>分类管理</span>
            </div>
            <div class="text item">
                <!-- 表格数据 -->
                <el-table style="width: 100%" :data="goods" stripe>
                    <el-table-column label="分类名称" prop="name">
                        
                    </el-table-column>
                   
                     <el-table-column label="管理" width="600px">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                             type="primary" icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"></el-button>
                        
                        </template>
                        </el-table-column>
                   
                    
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            goods:[
                {name:"海飞丝"},
                {name:"霸王"},
                {name:"哇哈哈"},
                {name:"旺仔"},
                {name:"喜之郎"},
                {name:"香飘飘"},
            ],
           
        }      
    },
     methods:{
      handleEdit(index, row){
        console.log(index, row);
      }}
};
</script>

<style lang ="less">
.account-manage {
  .el-card {
    .el-card__header {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      background-color: #f1f1f1;
    }
  }
}
</style>
