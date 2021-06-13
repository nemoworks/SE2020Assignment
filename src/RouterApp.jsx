import { BrowserRouter , Switch,Route,Link} from "react-router-dom"
import {list,employee,Single} from "./pages";
import {Layout , Menu , Breadcrumb } from "antd"
import "./App.css"

const {Header , Content , Footer } = Layout

// import get from "./get"

export default function RouterApp(){
    return (
        <div>
            <BrowserRouter>
                <div className="App">
                    <div>
                        <Link to="/employee">To employee</Link>
                        <Link to="/list">To list</Link>
                        <Link to="/employee/aaa">To aaa</Link>
                    </div>
                    <Switch>
                        {/* <Route path="/" exact component={index}></Route> */}
                        
                        <Route path="/employee" exact component={employee}></Route>
                        <Route path="/list" exact component={list}></Route>
                        <Route path="/employee/:id" component={Single}></Route>
                        {/* <Route path="http://localhost:8181/data" exact component ={get}></Route>会自动被修改为本地地址 */}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
        
    )
}