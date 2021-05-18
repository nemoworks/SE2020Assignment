
import React from"react"
import { Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import  actionCreators from './actionCreators'
// import { createHashHistory } from 'history';
// import {browseHistory} from "react-router"
import {Single} from "../pages";
import { BrowserRouter , Switch,Route,Link} from "react-router-dom"
import {withRouter } from "react-router";
// const hashHistory =createHashHistory()

// var data = {
//   key: '1',
//   firstName: 'John',
//   lastName: 'Brown',
//   age: 32,
//   address: 'New York No. 1 Lake Park',
//   tags: ['nice', 'developer'],
//   };

// var path = {
//   pathname:'/employee/1',
//   query:data,
// }




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
      (
        <Space size="middle">
          <button>
            <Link to={"/employee/"+text.key}>
            Edit
            </Link>
          </button>
          <button onClick={()=> actionCreators.delete(text.key)}>
            <Link to={"/list"}>
              Delete
            </Link>
          </button>
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

    

const state={
    columns:columns,
    data:ori_data
}

export default state