import React from"react"
import { Table} from 'antd';
import store from './store'//引入store中的数据
import GET from './GET'
import POST from "./POST";


class Mylist extends React.Component
{
  constructor(props)
  {
    super(props);

    GET();
    this.state={
      columns:store.getState().columns,
      data:store.getState().data
    }
    console.log(this.props.name)
    console.log(store.getState().data)
    
if (typeof(this.props.name) != "undefined") {
  console.log("in id's page , key:",parseInt(this.props.name))
  for ( let i=0; i<store.getState().data.length;i++)
    if(store.getState().data[i].key == this.props.name)
    {
      this.state.data=[store.getState().data[i]]
    }
     

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
    }
    )

    
  }
 
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