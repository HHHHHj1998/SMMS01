<template>
    <div class="account-add">
        <!-- 面板组件 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>添加账号</span>
            </div>
            <div class="text item">
                <el-form :model="accountAddForm" status-icon :rules="rules" ref="accountAddForm" label-width="100px" class="demo-ruleForm">
                    <!-- q账号 -->
                    <el-form-item label="账号" prop="username">
                        <el-input type="text" v-model="accountAddForm.username" autocomplete="off">

                        </el-input>
                    </el-form-item>

                    <!-- 密码 -->
                    <el-form-item label="密码" prop="password">
                        <el-input type="text" v-model="accountAddForm.password" autocomplete="off">

                        </el-input>
                    </el-form-item>
                    <!-- 确认密码 -->
                    <el-form-item label="确认密码" prop="checkPwd">
                        <el-input type="text" v-model="accountAddForm.checkPwd" autocomplete="off">

                        </el-input>
                    </el-form-item>
                    <!-- 选择用户组 -->
                    <el-form-item label="选择用户组" prop="usergroup">
                        <el-select v-model="accountAddForm.usergroup" placeholder="请选择用户组">
                            <el-option lable="普通用户" value="普通用户"></el-option>
                            <el-option lable="高级管理员" value="高级管理员"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('accountAddForm')">提交</el-button>
                        <el-button @click="resetForm('accountAddForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
//引入qs库
import qs from "qs";
export default {
  data() {
    // 自定义验证规则
    const pass = (rule, value, callback) => {
      if (value === "") {
        //如果用户没有输入密码
        callback(new Error("请输入密码")); //提示输入密码
      } else if (value.length < 3 || value.length > 6) {
        //密码长度验证
        callback(new Error("密码长度3 - 6 位")); //提示正确的密码长度
      } else {
        if (this.accountAddForm.checkPwd !== "") {
          this.$refs.accountAddForm.validateField("checkPwd");
        }
        callback(); //成功的回调
      }
    };
    const checkPass = (rule, value, callback) => {
      if (value === "") {
        //确认密码是否为空
        //如果为空 提示
        callback(new Error("请再次输入密码"));
      } else if (value !== this.accountAddForm.password) {
        callback(new Error("两次密码不一致"));
      }
      callback();
    };
    return {
      accountAddForm: {
        username: "",
        password: "",
        checkPwd: "",
        usergroup: ""
      },
      rules: {
        //账号
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "账号长度在 3 - 5 位", trigger: "blur" }
        ],
        //密码
        password: [{ required: true, validator: pass, trigger: "blur" }],
        //确认密码
        checkPwd: [{ required: true, validator: checkPass, trigger: "blur" }],
        //用户组
        usergroup: [
          { required: true, message: "请选择用户组", trigger: "change" }
        ]
      },
     
    };
  },
   methods: {
        //提交函数 点击登录按钮触发
        submitForm(formName) {
          //获取表单组件调用验证方法
          this.$refs[formName].validate(valid => {
            //如果通过验证 valid就是true
            if (valid) {
              // alert("通过验证，可以提交");
              //收集用户输入的所有账号数据
              let params = {
                username: this.accountAddForm.username,
                password: this.accountAddForm.password,
                usergroup:this.accountAddForm.usergroup,
              };
            
              //使用axios发送数据给后端
              this.axios.post('http://127.0.0.1:233/account/accountadd',qs.stringify(params))
              .then(response =>{
                  // console.log(response.data)
                //接受后端返回的错误码和提示信息
                let {error_code,reason} =response.data;
                  // console.log('错误码',error_code,"提示信息",reason)
                //根据后端响应的数据判断
                if(error_code ===0){
                  //成功的信息
                  this.$message({
                    type:"success",
                    message:reason
                  })
                  //跳转到账号管理列表
                  this.$router.push("/accountmanage");
                }else{
                  //弹出失败的提示
                  this.$message.error(reason);
                }
              })
              .catch(err =>{
                console.log(err)
              })
              // this.$router.push("/accountmanage");
            } else {
              alert("验证失败，不能提交");
              return false;
            }
          });
        },
        //重置表单，点击重置按钮触发
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
};
</script>

<style lang ="less">
.account-add {
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
