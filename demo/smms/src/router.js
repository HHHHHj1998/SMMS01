import Vue from 'vue'
import Router from 'vue-router'


//注册路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component:() => import('./views/Login/Login.vue')//引入登录组件
    },
    {
      path:'/',
      nanme:'home',
      component:()=>import('./views/Index/Index.vue'),//引入后端主页
      children:[
    
//系统信息
      {
        path:'/',//系统信息
        component:() =>import('./views/Home/Home.vue')
      },
      {//系统配置
        path:'systemlayout',
        component:() =>import('./views/SystemLayout/SystemLayout.vue')
      },
      {//权限管理
        path:'authoritymanage',
        component:() =>import('./views/AuthorityManage/AuthontyManage.vue')
      },
      {//添加管理组
        path:'managegroupadd',
        component:() =>import('./views/ManageGroupAdd/ManageGroupAdd.vue')
      },
     

//用户管理
      {//用户管理
        path:'/accountmanage',
        name:'accountmanage',
        component:() =>import('./views/AccountManage/AccountManage.vue')
      },
      {//用户添加
        path:'/accountadd',
        name:'accountadd',
        component:() =>import('./views/AccountAdd/AccountAdd.vue')
      },
      {//密码修改
        path:'/passwordmodify',
        name:'passwordmodify',
        component:() =>import('./views/PasswordModify/PasswordModify.vue')
      },


//商品管理
      {//商品管理
        path:'/goodsmanage',
        name:'goodsmanage',
        component:() =>import('./views/GoodsManage/GoodsManage.vue')
      },
      {//商品添加
        path:'/goodsadd',
        name:'goodsadd',
        component:() =>import('./views/GoodsAdd/GoodsAdd.vue')
      },

//销售统计
      {//销售统计
        path:'/salestatistics',
        name:'salestatistics',
        component:() =>import('./views/SaleStatistics/SaleStatistics.vue')
      },
      {//进货统计
        path:'/stockstatistics',
        name:'stockstatistics',
        component:() =>import('./views/StockStatistics/StockStatistics.vue')
      },

//分类管理
      {//分类管理
        path:'/classifymanage',
        name:'classifymanage',
        component:() =>import('./views/ClassifyManage/ClassifyManage.vue')
      },
      {//添加分类
        path:'/classadd',
        name:'classadd',
        component:() =>import('./views/ClassAdd/ClassAdd.vue')
      },

//进货管理
      {//库存管理
        path:'/stockcontrol',
        name:'stockcontrol',
        component:() =>import('./views/StockControl/StockControl.vue')
      },
      {//添加库存
        path:'/inventoryadd',
        name:'inventoryadd',
        component:() =>import('./views/InventoryAdd/InventoryAdd.vue')
      },

//出货管理
      {//销售列表
        path:'/salelist',
        name:'salelist',
        component:() =>import('./views/SaleList/SaleList.vue')
      },
      {//商品出库
        path:'/goodsout',
        name:'goodsout',
        component:() =>import('./views/GoodsOut/GoodsOut.vue')
      },
      {//商品退货
        path:'/goodsreturn',
        name:'goodsreturn',
        component:() =>import('./views/GoodsReturn/GoodsReturn.vue')
      },

//会员管理
      {//会员管理
        path:'/vipmanage',
        name:'vipmanage',
        component:() =>import('./views/VipManage/VipManage.vue')
      },
      {//商品退货
        path:'/accountvip',
        name:'accountvip',
        component:() =>import('./views/AccountVip/AccountVip.vue')
      },
      ]
    }
  ]
})
