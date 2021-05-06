import { BrowserRouter , Switch,Route,Link} from "react-router-dom"
import {list,employee} from "./pages";
import "./App.css"

export default function RouterApp(){
    return (
        <div>
            <BrowserRouter>
                <div className="App">
                    <div>
                        {/* <Link to="/">To index</Link> */}
                        <Link to="/employee">To employee</Link>
                        <Link to="/list">To list</Link>
                    </div>

                    <Switch>
                        {/* <Route path="/" exact component={index}></Route> */}
                        <Route path="/employee" exact component={employee}></Route>
                        <Route path="/list" exact component={list}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}