<template>
    <div class="account-manage">
        <!-- 面板组件 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>账号管理</span>
            </div>
            <div class="text item">
                <!-- 账号表格 -->

                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">

                    <!-- 单选框 -->
                    <el-table-column type="selection" width="55">
                    </el-table-column>

                    <!-- 账号 -->
                    <el-table-column prop="username" label="账号">
                    </el-table-column>

                    <!-- 用户组 -->
                    <el-table-column prop="usergroup" label="用户组">
                    </el-table-column>

                    <!-- 日期 -->
                    <el-table-column label="创建日期">
                        <template slot-scope="scope">{{ scope.row.cdate|filterCdate }}</template>
                    </el-table-column>

                    <!-- 操作 -->
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="primary" @click="handleEdit( scope.row.id)">
                                <i class="el-icon-edit"></i>
                            </el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">
                                <i class="el-icon-delete"></i>
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 修改的弹出模态框 -->
                <el-dialog title="收货地址" :visible.sync="flag" width="500px">
                    <!-- 回填表单 -->
                    <el-form :model="editForm" label-width="60px">
                        <!-- q账号 -->
                        <el-form-item label="账号" prop="username">
                            <el-input type="text" style="width:300px" v-model="editForm.username" autocomplete="off">
                            </el-input>
                        </el-form-item>
                        <!-- 用户组 -->
                        <el-form-item label="用户组" prop="usergroup">
                            <el-select v-model="editForm.usergroup" placeholder="请选择用户组" style="width:300px">
                                <el-option lable="普通用户" value="普通用户"></el-option>
                                <el-option lable="高级管理员" value="高级管理员"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="flag = false">取 消</el-button>
                        <el-button type="primary" @click="saveEdit">确 定</el-button>
                    </div>
                </el-dialog>

            </div>
        </el-card>
    </div>
</template>

<script>
//引入moment模块
import moment from "moment";
//引入qs模块
import qs from "qs";
export default {
  data() {
    return {
      tableData: [], //用户账号表格数据
      editForm: {
        username: "",
        usergroup: ""
      },
      flag: false,
      editId: ""
    };
  },
  created() {
    this.getAccountList();
  },
  methods: {
    //请求所有数据
    getAccountList() {
      this.axios
        .get("http://127.0.0.1:233/account/accountlist")
        .then(response => {
          //将后台返回的数据 直接赋值给tableData
          this.tableData = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //修改账号
    handleEdit(id) {
      //吧要修改的这条数据的id保存下载
      this.editId = id;
      //娴熟模态框
      this.flag = true;
      //发送请求 吧id发给后端
      this.axios
        .get(`http://127.0.0.1:233/account/accountedit?id=${id}`)
        .then(response => {
          let result = response.data[0];
          //回填表单
          this.editForm.username = result.username;
          this.editForm.usergroup = result.usergroup;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //删除账号函数
    handleDelete(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //发送ajax 把id传给后端
          this.axios
            .get(`http://127.0.0.1:233/account/accountdel?id=${id}`)
            .then(response => {
              //接受后端返回的错误码和提示信息
              let { error_code, reason } = response.data;
              //判断
              if (error_code === 0) {
                //淡出成功的提示
                this.$message({
                  type: "success",
                  message: reason
                });
                //在次获取所有用户账号列表
                this.getAccountList();
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //保存修改函数
    saveEdit() {
      //收集新数据和原来的id
      let params = {
        username: this.editForm.username,
        usergroup: this.editForm.usergroup,
        id: this.editId
      };
      //发送axios请求  吧所有数据和id传给后端
      this.axios
        .post("http://127.0.0.1:233/account/accountsave", qs.stringify(params))
        .then(response => {
          //接受错误码和提示信息
          let { error_code, reason } = response.data;
          //判断
          if (error_code === 0) {
            //成功
            this.$message({
              type: "success",
              message: reason
            });
          } else {
            //失败的信息
            this.$message.error(reason);
          }
          //关闭莫泰康
          this.flag = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    filterCdate(cdate) {
      return moment(cdate).format("YYYY/MM/DD HH:mm:ss");
    }
  }
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
