import { useRouteMatch }from "react-router-dom"

export default function Single()// if use hooks , then you need upper letter to start with 
{
    console.log( useRouteMatch().params.id)
    var id = useRouteMatch().params.id;
    return (
    <div>
         <div className="employee page container">employee {id}'s page</div>
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
