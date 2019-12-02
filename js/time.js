// JavaScript Document
function getTime(){   
var date = new Date(); //创建时间对象  
var year = date.getFullYear(); //获取年   
var month = date.getMonth()+1;//获取月
var day = date.getDate(); //获取当日  
//var hour = date.getHours();//
//var minute = date.getMinutes();
//var second = date.getSeconds();
var time = year+"-"+month+"-"+day ;//组合时间  
//	+hours+":"+minutes+":"+seconds;
alert("当前日期："+time);  
}