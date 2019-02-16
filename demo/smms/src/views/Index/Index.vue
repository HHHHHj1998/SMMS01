<template>
    <!-- <div class="index"> -->

        <el-container>
            <!-- 左侧导航 -->
        <el-aside width="200px">
            <Nav></Nav>
        </el-aside>
        <!-- 右侧容器 -->
        <el-container>
            <!-- 右侧头部 -->
            <el-header>
                <!-- 头部组件 -->
                <Top></Top>
            </el-header>
            <!-- 右侧中间 -->
            <el-main>
                <!-- 路由出口 -->
                <router-view/>
            </el-main>
            <!-- 右侧底部 -->
            <el-footer>
                <Bottom></Bottom>
            </el-footer>
  </el-container>
</el-container>
    <!-- </div> -->
</template>

<script>
//引入导航栏组件
import Nav from'@/components/Nav/Nav.vue';
// 引入头部组件
import Top from'@/components/Top/Top.vue';
//引入底部组件
import Bottom from'@/components/Bottom/Bottom.vue'
export default {
    components:{
        Nav,
        Top,
        Bottom
    }
}
</script>

<style lang ="less">
/* .index{
   height:100%; */

    .el-container {
        height:100%;
        
  
    /* 左侧栏 */
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;  
  }
  
    /* 右侧中央 */
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;

  }
         /* 右侧头尾 */
     .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height:60px;
  }
    
  }

/* } */
</style>
