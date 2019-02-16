<template>
    <div class="login">
        <!-- 登录表单容器 -->
        <div class="login-wrapper">
        <h1 class="title">
            <i clss="el-icon-menu"></i>
            华联超市管理系统-登录
        </h1>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model.number="loginForm.username"></el-input>
            </el-form-item>
            
            <el-form-item label="密码" prop="password" autocomplete="off">
                <el-input type="text" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
           
            <el-form-item label="确认密码" prop="checkPwd">
                <el-input type="text" v-model="loginForm.checkPwd" autocomplete="off"></el-input>
            </el-form-item>
           
           
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            
            </el-form-item>

        </el-form>

        

        </div>
    </div>
</template>
<script>
export default {
    data(){
       const pass = (rule,value,callback) =>{
           if(value===''){//如果用户没有输入密码
               callback(new Error('请输入密码'))//提示输入密码
           }else if(value.length<6 || value.length>12){//密码长度验证
               callback(new Error('密码长度6 - 12 位'))//提示正确的密码长度
           }else{
               if(this.loginForm.checkPwd !==''){
                   this.$refs.loginForm.validateField('checkPwd')
               } 
               callback()//成功的回调
           }
          
       }
       const checkPass = (rule,value,callback) =>{
           if(value===''){//确认密码是否为空
            //如果为空 提示
            callback(new Error('请再次输入密码'))
        }else if(value!==this.loginForm.password){
            callback(new Error('两次密码不一致'))
        }
        callback()
        };
       
        return{
            //登录表单的数据
            loginForm:{
                username:'',
                password:'',
                checkPwd:''
            },
            //验证规则，也是一份数据
            rules:{
                username:[
                    {required:true,message: "请输入账号",trigger:'blur'},
                    { min: 3, max: 5, message: "账号长度在 3 - 5 位", trigger: "blur" }         
                ],
                password:[
                    {required:true,validator:pass,trigger:'blur'}
                ],
                checkPwd:[
                    {required:true,validator:checkPass,trigger:'blur'}
                ]
            }
        }
    },
    methods:{
        //提交函数 点击登录按钮触发
        submitForm(formName){
            //获取表单组件调用验证方法
            this.$refs[formName].validate(valid =>{
                //如果通过验证 valid就是true
                if(valid){
                    alert('通过验证，可以提交');
                    let params={
                        username:this.loginForm.username,
                        password:this.loginForm.password
                    };
                this.$router.push('/')
                }else{
                    alert('验证失败，不能提交')
                }
            })
                    },
        //重置表单，点击重置按钮触发
        resetForm(formName){
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style lang ="less">
.login{
    height:100%;
    width:100%;
    background-color:#2d3a4b;
    .login-wrapper{
        width: 500px;
        height:350px;
        border-radius:8px;
        background-color:rgba(0,0,0,.2);
        color:#fff;
        /* 垂直水平居中 */
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        padding-top:20px;
        .title{
            font-size:22px;
            margin-left:60px;
            margin-bottom:20px; 
        
        }
        .el-form{
            margin-top:10px;
            .el-form-item{
                .el-form-item__label{
                    color:#Fff;
                }
                .el-form-item__content{
                    width:350px;
                }
            }
        }
    }
}
</style>
