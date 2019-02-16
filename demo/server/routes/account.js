/*
这是账号管理路由模块
*/ 

var express = require('express');
var router = express.Router();

//引入连接数据库模块
const connection = require('./connect')

//设置响应头解决跨域
router.all('*',(req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  next();
})


// 添加账号路由 /accountadd
router.post('/accountadd',(req,res) =>{

  //接收前端发送的添加账号的数据
  let{username,password,usergroup}=req.body;
  console.log('前端发送的亲求', username,password,usergroup)
  //把数据存入数据库  
  //构造sql语句
  const sqlStr = `insert into account (username,password,usergroup) values('${username}','${password}','${usergroup}')`;
  //执行sql
  connection.query(sqlStr,(err,data) =>{
   if(err) throw err;
   //判断受影响的行数
   if(data.affectedRows >0){
     //如果大于0代表插入成功 就返回成功的数据对象
     res.send({'error_code':0,'reason':'插入成功'})
   }else{
     //否则就是失败，插入失败的数据
     res.send({'error_code':1,'reason':'失败'})
   }
  })
})

// 账号列表路由 /accountlist
router.get('/accountlist',(req,res) =>{
    //构造查询所有数据的sql语句 并按时间排序
    const sqlStr=`select * from account order by cdate desc`;
    //执行sql语句
    connection.query(sqlStr,(err,data) =>{
      if(err) throw err;
      //将查询到的数据返回到前端
      res.send(data);
    })
})


//删除账号路由 /accountdel
router.get('/accountdel',(req,res) =>{
  let {id} = req.query;
  //根据id删除
  //构造sql语句
  const sqlStr = `delete from account where id=${id}`;
  //执行sql语句
  connection.query(sqlStr,(err,data)=>{
    if(err) throw err;
    if(data.affectedRows> 0){
      //受影响行数大于0成功，返回成功的数据对象到前端
      res.send({'error_code': 0 ,'reason':'删除成功'})
    }else{
      //否则就是失败，插入失败的数据
      res.send({'error_code':1,'reason':'失败'})
    }
  })
})

// 修改账号路由 数据回填
router.get('/accountedit',(req,res) =>{
  let {id} = req.query;
  //构造sql语句
  const sqlStr = `select * from account where id=${id}`;
  //执行sql语句
  connection.query(sqlStr,(err,data)=>{
    if(err) throw err;
    //将查询接受到的数据返回给前端

    res.send(data);
  })
})


//保存修改后的路径 
router.post('/accountsave',(req,res)=>{
  //接受原来是id和修改后的数据
  let {username,usergroup,editId} = req.body;
console.log(editId)
  //构造sql
  const sqlStr = `update account set username='${username}',usergroup='${usergroup}',where id=${editId}`;

  //执行sql语句
  connection.query(sqlStr,(err,data)=>{
    if(err) throw err;
    if(data.affectedRows> 0){
      //受影响行数大于0成功，返回成功的数据对象到前端
      res.send({'error_code': 0 ,'reason':'删除成功'})
    }else{
      //否则就是失败，插入失败的数据
      res.send({'error_code':1,'reason':'失败'})
    }
  })
})
module.exports = router;
