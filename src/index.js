import React from "react"
import ReactDOM from "react-dom"
import RouterApp from "./RouterApp"
import {Layout , Menu , Breadcrumb } from "antd"
import { BrowserRouter , Switch,Route,Link} from "react-router-dom"
import {list,employee,Single} from "./pages";

const {Header , Content , Footer } = Layout

ReactDOM.render(
  <div>
    <BrowserRouter>
    <Layout className="layout">
      
                <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                      <Link to="/employee">To employee</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/list">To list</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to="/employee/aaa">To aaa</Link>
                    </Menu.Item>
                </Menu>
                </Header>

                <Content style={{ padding: '100px 50px' }}>
                  <Switch>
                      <Route path="/employee" exact component={employee}></Route>
                      <Route path="/list" exact component={list}></Route>
                      <Route path="/employee/:id" component={Single}></Route>
                  </Switch>
                </Content>

                <Footer style={{ textAlign: 'center' }}>now we are at sum : 90</Footer>
               
    </Layout>
    </BrowserRouter>
  </div>
  ,
  document.getElementById("root")
);

