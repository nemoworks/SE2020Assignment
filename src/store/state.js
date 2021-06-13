
import React from"react"
import { Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import  actionCreators from './actionCreators'

import {Single} from "../pages";
import { BrowserRouter , Switch,Route,Link} from "react-router-dom"


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
            Info
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
];

    

const state={
    columns:columns,
    data:ori_data
}

export default state