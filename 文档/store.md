## store

​	store的整体功能：实现前端数据缓存，被所有前端页面共享

​	使用技术：基于redux实现



​	MY-APP/scr/store下：

- index.js：

  - 根据当前reducer中的数据创建一个store对象
  - 输出：创建的store对象

- actionCreators.js:

  - 用于构建action（包括类型字段，参数）
  - 使用store.dispatch(action)发送动作

- reducers.js：

  - 接收：action作为传入参数，并获取当前state
  - 含有纯函数的具体实现，其中创建了新状态newState,并基于上个状态（从state中获取）和纯函数功能设置newState
  - 根据action的类型字段选择调用一个纯函数
  - 输出：由纯函数创建的新状态newState

- state.js：

  - 定义了员工列表的列：columns （包括每一行末尾的edit链接和delete按钮）
  - 维护了列表的”状态“在常量state中（不会被更改，但可以被重新生成），包含列表的列和行数据
  - 行数据初始化为空数组

- type.js：

  - 定义了各纯函数的类型字段，存放在常量type中：

    - INITIALIZE
    - DELETE

  - 输出type

    