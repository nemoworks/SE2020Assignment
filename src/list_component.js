import React from"react"
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';


class Mylist extends React.Component
{
  delete = (key) => 
  {
    console.log(key)
    let newData = this.state.data.filter// not DataSource
    (
      function (item) 
      {
        return item.key !== key
      }
    )
    this.setState({ data: newData});
  };

  constructor(props)
  {
    super(props);
    const columns = 
    [
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => 
        
          // console.log(text);
          // console.log(record);
          (
         
            <Space size="middle">
              <button>Edit</button>
              {/* <button onClick={()=>this.delete(record.key)}>Delete</button> */}
              <button onClick={()=>this.delete(text.key)}>Delete</button>
            </Space>
          )
        
        
      }
    ];

    const ori_data=
    [
      {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      }
    ];

    this.state={
      columns:columns,
      data:ori_data
    }
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