<template>
    <div class="goods-add">
        <!-- 面板组件 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品添加</span>
      </div>
      <div class="text item">
        <!-- 表单 -->
        <el-form :label-position="labelPosition" label-width="80px" :model="goodsForm" :rules="rules">
          <el-form-item label="所属分类">
            <el-select v-model="goodsForm.userGroup" placeholder="--顶级分类--">
              <el-option lable="普通用户" value="普通用户"></el-option>
              <el-option lable="高级管理员" value="高级管理员"></el-option>
            </el-select>
          </el-form-item>
          <!-- 商品条形码 -->
          <el-form-item label="商品条形码:" prop="class">
            <el-input v-model="goodsForm.region" class="input">
            </el-input>
            <el-button type="success" size="small">生成条形码</el-button>
          </el-form-item>
          <!-- 商品名称 -->
          <el-form-item label="商品名称:" prop="goodsname">
            <el-input v-model="goodsForm.goodsname" class="input"></el-input>
          </el-form-item>
          <!-- 商品售价 -->
          <el-form-item label="商品售价:" prop="class">
            <el-input v-model="goodsForm.goodsprice" class="input1"></el-input>元
          </el-form-item>
          <!-- 市场价 -->
          <el-form-item label="市场价:">
            <el-input v-model="goodsForm.marketprice" class="input1"></el-input>元
            <div class="tips">商品默认价格为市场的1.2倍</div>
          </el-form-item>
          <!-- 商品进价 -->
          <el-form-item label="商品进价:">
            <el-input v-model="goodsForm.inprice" class="input1"></el-input>元
          </el-form-item>
          <!-- 入库数量 -->
          <el-form-item label="入库数量:">
            <el-input v-model="goodsForm.incount" class="input1"></el-input>
            <div class="tips">计量单位为千克</div>
          </el-form-item>
          <!-- 商品重量 -->
          <el-form-item label="商品重量:">
            <el-input v-model="goodsForm.goodsweight" class="input1"></el-input>
          </el-form-item>
          <!-- 商品单位 -->
          <el-form-item label="商品单位:">
            <el-input v-model="goodsForm.goodsunit" class="input1"></el-input>
          </el-form-item>
          <!-- 会员优惠 -->
          <el-form-item label="会员优惠">
            <el-radio v-model="radio" label="1">享受</el-radio>
            <el-radio v-model="radio" label="2">不享受</el-radio>
          </el-form-item>

          <el-form-item label="状态">
            <el-radio v-model="radio1" label="1">启用</el-radio>
            <el-radio v-model="radio1" label="2">禁用</el-radio>
          </el-form-item>

          <!-- 商品简介 -->
          <el-form-item label="商品简介:">
            <el-input type="textarea" :rows="2" v-model="textarea" maxlength="200">
            </el-input>
          </el-form-item>
          <el-button type="primary" size="mini" class="addbtn">添加</el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      radio: "2",
      radio1: "1",
      goodsForm: {
        region: "",
        goodsname:"",
        goodsprice:"",
        marketprice:"",
        inprice:"",
        incount:"",
        goodsweight:"",
        goodsunit:""
      },
      textarea:""
      ,
      rules: {
        class: [{ required: true, message: "请输入分类", trigger: "blur" }],
        goodsname: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
        ]
      }
    };
  }
};
</script>

<style lang ="less">
.goods-add {
  .el-card {
    .el-card__header {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      background-color: #f1f1f1;
    }
    .el-card__body {
      text-align: left;
      padding-top:0;
      .el-form {
        width: 290px;
        .el-form-item {
          margin-bottom: 34px;
          height: 60px;
          height: 60px;
          .el-form-item__label {
            height: 40px;
            margin-top: 30px;
          }
          .el-form-item__content {
            width: 400px;
            .el-textarea{
              width:1600px;
            }
            .el-form-item__error {
              margin-top: -5px;
            }
            .el-radio {
              margin-left: 10px;
            }
            .input {
              width: 290px;
              .el-button {
                height: 40px;
              }
            }
            .input1 {
              width: 140px;
              margin-right: 5px;
            }
            .tips {
              margin-top: 0;
              font-size: 12px;
              height: 20px;
              line-height: 20px;
              margin-bottom: 20px;
            }
            .el-button {
              margin-left: 5px;
            }
            .el-input {
              .el-input__inner {
                height: 35px;
              }
            }
          }
        }
        .addbtn {
          margin-top: 55px;
        }
      }
    }
  }
}
</style>
