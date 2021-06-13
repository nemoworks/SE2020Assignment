# SE2020Assignment



### 启动

- 启动后端：在idea 下运行backend\src\main\java\com\se2020\backend\BackendApplication.java
- 启动前端: 命令行，在项目根目录下，输入yarn start 

- 注意：可能需要安装依赖文件（没有上传至github）



### 使用

- 项目启动完成时，初始页面只有 to employee , to list , to aaa 三个导航链接，页面主体部分为空白

- 点击To employee 或者输入/localhost:3000/employee可以进入employee页面
  - employee页面有一个表格，用来向list表加入员工信息或者修改已有员工信息
    - First Name 和 Last Name 共同决定一条数据，也即当First Name 和 Last Name与现有表项相同时，判断为更改，否则判断为增添
    - 点击commit后，修改后的前端store会立即Post到后端
  
- 点击To list 或者输入/localhost:3000/list可以进入list页面
  
  - 每次进入list页面时，将向后端发送一个GET请求以获得后端数据，我们提交的版本后端存有一条数据，因此会显示一条数据
  
  - 点击下方get按钮将会调用GET从后端获取数据给前端的store进行初始化
  
  - 点击下方post会将当前前端store的数据发送给后端（后端的json文件会被更改，之后再调用GET将会得到被更改后的数据）
  
  - 可以点击每一行的delete实现对该行的删除操作,前端的store会改变，但不会自动post到后端，需要点击post按钮才会提交给后端
  
  - 点击info按钮，可以进入员工详情页面，只显示该员工的那一条数据，采取约定式路由的做法，第一条的路由为http://localhost:3001/employee/1，第二条为http://localhost:3001/employee/2 ，依次类推，如果删除了数据，key不会重新分配，而是在原来的基础上继续增长
  
    
  
- 点击To aaa或者输入/localhost:3000/employee/aaa 将会显示所有数据，和list页面一样
  - 由于我们用自然数作为key，故aaa不是一个key，就如同当只有3条数据时访问http://localhost:3001/employee/4一样，这里用作展示我们的异常处理，此时将会显示所有数据
  
  


### 备注

- 后端的数据存储在/backend/data/data.json
