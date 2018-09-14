// 引入express模块
const express = require("express"); 
// 引入mock模块
const Mock = require("mockjs"); 
// 实例化express
const app = express(); 
const path = require("path");
const fs = require("fs");

// 读取配置文件 将路由和文件对应上
fs.readFile(__dirname + "/conf.json", "utf-8", function(err, data) {
  if (err) {
    console.log(err);
  } else {
    let dataObject = JSON.parse(data);
    for (let key in dataObject) {
      app.all(dataObject[key].url, function(req, res) {
        fs.readFile(
          path.join(__dirname + "/test", dataObject[key].path),
          "utf-8",
          function(err, data) {
            if (err) {
              console.log(err);
            } else {
              res.json(JSON.parse(data))
            }
          }
        );
      });
    }
  }
});

// 监听8090端口
app.listen("8090");
