/* 
  fs（file system）模块是nodejs提供的用于访问本地文件系统的功能模块
  它使得运行于nodejs环境下的JavaScript具备直接读写本地文件的能力
*/

/* 
  引入fs模块:
    fs模块是nodejs的核心模块之一，只要安装了nodejs，就可以直接使用，不需要单独安装。引入fs模块非常简单
*/
const fs = require('fs');
/* 
    写入文件内容语法
      fs.writeFile('文件路径', '写入内容', err => {
        // 写入后的回调函数
      })
*/