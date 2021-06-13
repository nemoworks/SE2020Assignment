import { useRouteMatch }from "react-router-dom"
import Mylist from "../list_component"
export default function Single()// if use hooks , then you need upper letter to start with 
{
    console.log( useRouteMatch().params.id)
    var id = useRouteMatch().params.id;
    console.log("id type:", typeof id)
    return (
    <div>
         <Mylist name={id}/>
    </div>
    )
}

// import React from"react"



// export default class Single extends React.Component
// {
    
//   render()
//   {
//     var data = this.props.location.query;
//     var {key} = data.key;
//     return(
//         <div className="employee page container">employee {key}'s page</div>
//     );
//   }
// }
