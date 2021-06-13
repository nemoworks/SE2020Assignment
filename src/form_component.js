import React from"react"
import  actionCreators from './store/actionCreators'
import store from "./store"
// import ReactDOM from "react-dom"
import { Form, Input, Button } from 'antd';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const Form_init = () => 
{
    const onFinish = (values) => {
      console.log('Success:', values);
      actionCreators.modify(values);
       console.log("after modify , data:",store.getState().data)
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="FirstName"
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Please input your firstname!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="LastName"
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please input your lastname!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
          >
            <Input/>
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
};

export default Form_init