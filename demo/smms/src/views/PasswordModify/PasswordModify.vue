<template>
    <div class="password-modify">
        <!-- 面板组件 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>添加账号</span>
            </div>
            <div class="text item">
                <el-form :model="passwordModifyForm" status-icon :rules="rules" ref="passwordModifyForm" label-width="100px" class="demo-ruleForm">
                    <!-- q账号 -->
                    <el-form-item label="原密码" prop="oldpassword">
                        <el-input type="text" v-model="passwordModifyForm.oldpassword" autocomplete="off">

                        </el-input>
                    </el-form-item>

                    <!-- 密码 -->
                    <el-form-item label="新密码" prop="newpassword">
                        <el-input type="text" v-model="passwordModifyForm.newpassword" autocomplete="off">

                        </el-input>
                    </el-form-item>
                    <!-- 确认密码 -->
                    <el-form-item label="确认密码" prop="checkpassword">
                        <el-input type="text" v-model="passwordModifyForm.checkpassword" autocomplete="off">

                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('passwordModifyForm')">提交</el-button>
                        <el-button @click="resetForm('passwordModifyForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
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
        if (this.passwordModifyForm.checkpassword !== "") {
          this.$refs.passwordModifyForm.validateField("checkpassword");
        }
        callback(); //成功的回调
      }
    };
    const checkPass = (rule, value, callback) => {
      if (value === "") {
        //确认密码是否为空
        //如果为空 提示
        callback(new Error("请再次输入密码"));
      } else if (value !== this.passwordModifyForm.newpassword) {
        callback(new Error("两次密码不一致"));
      }
      callback();
    };
    return {
      passwordModifyForm: {
        oldpassword: "",
        newpassword: "",
        checkpassword: ""
      },
       rules: {
        //原密码
        oldpassword: [
          { required: true, message: "请输入原密码", trigger: "blur" },

        ],
        //新密码
        newpassword: [{ required: true, validator: pass, trigger: "blur" }],
        //确认密码
        checkpassword: [{ required: true, validator: checkPass, trigger: "blur" }]
       }
    };
  }
};
</script>

<style lang ="less">
.password-modify {
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
