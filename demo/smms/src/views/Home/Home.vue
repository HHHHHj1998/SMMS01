<template>
    <div class="home">
        <!-- 面板组件 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>系统信息</span>
            </div>
            <div class="text item">
                <!-- 提示信息 -->
                <el-alert title="商品总数: 2254,已销售总金额: 99.99, 商品库存总价:9999.99" type="info" show-icon>
                </el-alert>
                <!-- 导入数据 -->
                <el-alert title="导入数据" type="info" show-icon>
                </el-alert>
                <!-- 左右卡片 -->
                <el-row :gutter="20">
                    <!-- 左 -->
                    <el-col :span="12">
                        <!-- 左侧卡片 -->
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>销售排行</span>
                            </div>
                            <div class="text item">
                                <!--   左侧表格  -->
                                <el-table :data="saleDate" style="width: 100%">
                                    <!-- 商品名称 -->
                                    <el-table-column prop="goodsName" label="商品名称">
                                    </el-table-column>
                                    <!-- 销量 -->
                                    <el-table-column prop="saleCount" label="销量">
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-card>
                    </el-col>
                    <!-- 右 -->
                    <el-col :span="12">
                        <!-- 左侧卡片 -->
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>销售排行</span>
                            </div>
                            <div class="text item">
                                <!--   右侧表格  -->
                                <el-table :data="stockoutData" style="width: 100%">
                                    <!-- 缺货的上坪 -->
                                    <el-table-column prop="goodsName" label="缺货的商品">
                                    </el-table-column>
                                    <!-- 缺货数量 -->
                                    <el-table-column prop="inventory" label="缺货数量">
                                    </el-table-column>
                                    <!-- 操作 -->
                                    <el-table-column prop="saleCount" label="操作">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small">入库</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>

            </div>
        </el-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      //销售排行数据
      saleDate: [
        {
          goodsName: "霸王",
          saleCount: 15
        },
        {
          goodsName: "飘影",
          saleCount: 3
        },
        {
          goodsName: "拉芳",
          saleCount: 13
        },
        {
          goodsName: "多芬",
          saleCount: 9
        }
      ],
      //缺货数据
      stockoutData: [
        {
          goodsName: "霸王",
          inventory: 7
        },
        {
          goodsName: "程序员必备",
          inventory: 28
        }
      ]
    };
  }
};
</script>

<style lang ="less">
.home {
  .el-card {
    .el-card__header {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      background-color: #f1f1f1;
    }
    .el-card__body {
      .item {
        .el-alert {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
