import React from"react"
import { Table} from 'antd';
import  store from './store'//引入store中的数据
console.log(store.getState())

class Mylist extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state={
      columns:store.getState().columns,
      data:store.getState().data
    }
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
    })
  }

  render()
  {
    return(
    <div className="Mylist">
        <Table columns={this.state.columns} dataSource={this.state.data} />
    </div>
    );
  }
}
export default Mylist;