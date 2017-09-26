// 引入mockjs
const Mock = require('mockjs');
//用户登录信息
const loginInfo = {
  'userName':'admin',
  'password':'admin',
  'image':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506075878607&di=9d3069af9df00be97e15be4a37ece713&imgtype=0&src=http%3A%2F%2Fawb.img.xmtbang.com%2Fimg%2Fuploadnew%2F201602%2F10%2Faaac35afb75f4c0a99fa0a542707856b.jpg'
};
//表格页数据
const tableData = {

}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/login/user', loginInfo);
