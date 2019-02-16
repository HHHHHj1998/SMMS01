<template>
    <div class="top">
        <el-row>
            <el-col :span="12">
                <div class="title">
                    <i class="el-icon-upload"></i>
                    华联超市管理系统
                </div>
            </el-col>

            <el-col :span="12">
                <div class="top-right">
                    <el-row>
                        <el-col :span="18">
                            欢迎您
                            <el-dropdown>
                                <span class="username el-dropdown-link">
                                    {{username}}
                                    <i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                    <el-dropdown-item>推出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>

                        </el-col>

                        <el-col :span="6">
                            <div class="avator">
                                <img width="100%" height="100%" :src="avatorUrl">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
  data() {
    return {
      username: "吴彦祖",
      avatorUrl: "http://127.0.0.1:8080/timg.jpg"
    };
  }
};
</script>

<style lang="less">
.top {

  //   color: #2d3a4b;

  .title {
    font-size: 24px;
    text-align: left;
    margin-left: 30px;
    font-weight: 600;
  }
  .top-right {
    color: #2d3a4b;
    text-align: right;
    margin-right: 20px;
    height: 60px;
    .username {
      font-size: 16px;
      font-weight: 600;

    }
    .avator {
      width: 56px;
      height: 56px;
      margin-top: 2px;
      margin-left: 30px;
      border-radius: 50%;
    }
    img {
      border-radius: 50%;
    }
  }
}
</style>
