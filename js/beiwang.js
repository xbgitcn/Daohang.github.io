var named;
             function delete1(id)
             {
                 localStorage.removeItem(id);
                 this.Storage.writeData();
             }
             function prom() {

                 var name = prompt("请输入时间", "");
                 named = name;
                
                 if (named)

                 {

                     alert("待处理时间：" + name)
                     document.getElementById("shangtian").style.display = "none";
                     document.getElementById("ritian").value = named;

                 }
                 else {
                     document.getElementById("ritian").value = "12：00";
                 }

             }
          var Storage =
          {
              saveData:function()
              {
    
                      var data = document.querySelector("#post textarea");
                  if(data.value != "")
                  {
                      var time = new Date().getTime() + Math.random() * 5;
                      if (named) {
                          localStorage.setItem(time, data.value + "|" + named + "|" + this.getDateTime());
                      }
                      else
                      {
                          localStorage.setItem(time, data.value + "|" + "12：00" + "|" + this.getDateTime());
                      }

                      data.value = "";
                      this.writeData();
                  }
                  else
                  {
                      alert("请填写您的备忘信息！");
                 }
              },
              writeData:function()
              {
                 var dataHtml = "", data = "";
                  for(var i = localStorage.length-1; i >= 0; i--)
                  {
                      data = localStorage.getItem(localStorage.key(i)).split("|");

                      dataHtml += "<span style=>" + data[1] + "<span style=\"float:right\">" + data[2] + "</span><p><span class=\"msg\">" + data[0] + "<input style=\"float:right;border:none;border-radius:5px;\" id=\"clearBt\" type=\"button\" onclick=\"delete1(" + localStorage.key(i) + ");\" value=\"已完成\"/>" + "</span></p>";
                  }
                  document.getElementById("comment").innerHTML = dataHtml;
              },
              clearData:function()
              {
                  if(localStorage.length > 0)
                  {
                      if(window.confirm("清空后不可恢复，是否确认清空？"))
                      {
                          localStorage.clear();
                          this.writeData();
                      }
                  }
                  else
                 {
                     alert("没有需要清空的数据！");
                  }
              },
              getDateTime:function()
              {
                  var isZero = function(num)//补零占位（美观）
                  {
                      if(num < 10)
                     {
                          num = "0" + num;
                      }
                      return num;
                  }
                  
                  var d = new Date();
                  return d.getFullYear() + "-" + isZero(d.getMonth() + 1) + "-" + isZero(d.getDate()) + " " + isZero(d.getHours()) + ":" + isZero(d.getMinutes()) + ":" + isZero(d.getSeconds());
              }            
          }
          
          window.onload = function()
          {
              Storage.writeData();//打开页面时，先将localStorage（已存入备忘）中的数据输出
              document.getElementById("postBt").onclick = function(){Storage.saveData();}//作用是立即将localStorage中的数据输出
              document.getElementById("clearBt").onclick = function(){Storage.clearData();}//清空所有已保存的数据
          }