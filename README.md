# SE2020Assignment

### 启动
启动后端服务器
yarn start 启动前端
可能需要安装依赖文件（没有上传至github）


### 使用

>初始页面只有 to employee , to list , to aaa 三个导航链接

- 点击To employee 或者输入/localhost:3000/employee可以进入employee页面
  - employee页面有一个 **空表格（前端存储初始化为空数组）**
  - 点击下方get按钮将会调用GET从后端获取数据给前端的store进行初始化，将会显示三行初始数据
  - 可以点击每一行的删除实现对该行的删除操作,前端的store会改变，不会自动post到后端
  - 目前还没有完成edit操作逻辑
  - 点击下方post会将当前前端store的数据发送给后端（后端的json文件会被更改，之后再调用GET将会得到被更改后的数据）
  
- 点击To list 或者输入/localhost:3000/list可以进入list页面
  - list页面和employee页面是一样的，目前主要用来展示多页面共享数据，list和employee共享前端store数据，在一个页面上执行删除操作后的影响也可以在另一个页面上看到
  - 也可以在list页面上执行删除，点击GET,POST按钮
  
  
- 点击To aaa或者输入/localhost:3000/employee/aaa 可以进入aaa个人页面
  - 目前个人页面只会显示employee aaa's page字符串，根据/employee/:id中的id替换字符串内容
 

### 备注

- 后端的数据存储在/backend/data/data.json
