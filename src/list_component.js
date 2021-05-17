import React from"react"
import { Table} from 'antd';
import store from './store'//引入store中的数据
// import type from './store/type'
import GET from './GET'
// import Mock from "mockjs"
import axios from 'axios'
import POST from "./POST";
// import './mock/mock_api'
// import { func } from "prop-types";
// import Router from "koa-router"
// const router = new Router();

// let dataSource = Mock.mock([{
//   "key|1-1": "1",
//   "firstName|1": "John",
//   "lastName|1": "Brown",
//   "age|+1": 32,
//   "address|1": "New York No. 1 Lake Park",
//   "tags|1-2": ["nice", "developer"]
//   }])

console.log(store.getState())

// function write(){
//   const body =store.getState().data
//       axios.post('/api/data',body)
//       .then(res=>{
//       console.log('post res=>',res); 
//       })
//     fs.write('./api/data.json',JSON.stringify(body));
// }

class Mylist extends React.Component
{
  constructor(props)
  {
    super(props);
    // const that = this;  
    
    this.state={
      columns:store.getState().columns,
      data:store.getState().data
      
    }
    console.log(this.props.name)
    console.log(store.getState().data)
    
if (typeof(this.props.name) != "undefined") {
  this.state.data=[ store.getState().data[parseInt(this.props.name)-1] ]
}
    
    
    // axios.get('/api/data').then((res) => {
    //   //console.log(res.status)
    //   if(res.status === 200){
    //       console.log(res.data)
    //       that.setState({
    //           data: res.data
    //       })
    //   }
    // })

    // this.GET();
  }
  componentDidMount()
  {
    //视图的更新，需要事件的发布和订阅，在redux中不需要写事件的发布，
    //只需要写订阅，store中的subscribe的方法，就是订阅，将数据的修改写在
    //subscribe中的回调函数内部
    
    store.subscribe(()=>{
        this.setState({
              data:store.getState().data
        })
    }
    )

    
  }
 
  // GET()
  // {
  //   var save_data;
  //   // axios.get("http://localhost:8181/data")
  //   // .then(function(resp){
  //   //   save_data=resp.data
  //   // });

  //   save_data=[
  //     {
  //     key: '1',
  //     firstName: 'John',
  //     lastName: 'Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //     }
  //   ]

  //   let action={//定义动作
  //     type:type.INITIALIZE,
  //     payload:save_data
  //   }
    
  //   store.dispatch(action);
  // }
  render()
  {
    return(
    <div className="Mylist">
        <Table columns={this.state.columns} dataSource={this.state.data} />
        <button onClick={() => {
            GET();
           }}>
          get</button>
        <button onClick={() => {
            POST();
           }}>
          post</button>
    </div>
    );
  }
}
export default Mylist;