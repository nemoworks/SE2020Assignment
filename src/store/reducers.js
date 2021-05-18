//1.该函数有两个参数
//第一个参数是唯一数据源，需要赋值初始数据，第二个参数是actionCreators中发来的动作action
//2.拷贝一层数据源，进行这个数据源的修改
//3.返回值：返回新的状态
//4.使用switch，判断用户的动作类型，进行对应的数据修改
import type from './type'
import state from './state'
const reducers=(prevState = state , action)=>{

    //拷贝初始数据，生成新的状态值
    const newState={
        ...prevState
    }
    switch (action.type) {
        case type.DELETE:
            console.log(action)//此处有输出action，那么说明在actionCreator中定义的动作，已成功
            //TODO:实现删除逻辑
            let newData = newState.data.filter// not DataSource
            (
                function (item) 
                {
                    return item.key !== action.payload
                }
            )
            newState.data=newData
            
            break;
        case type.INITIALIZE:
            let newData_2 = action.payload
            newState.data = newData_2
            break;

        case type.MODIFY:
            var coming_change = {
            key:(newState.data.length+1).toString(), 
            firstName: action.payload.firstname,
            lastName: action.payload.lastname,
            age: parseInt(action.payload.age),
            address: action.payload.address,
            tags: ['nice'],
            }
            
            var newData_3 = newState.data
            var found = false
            console.log("in modify")
            for(var i = 0; i < newData_3.length; i++) {
                if( newData_3[i].firstName == coming_change.firstName && newData_3[i].lastName == coming_change.lastName)
                   {
                       newData_3[i].age = coming_change.age
                       newData_3[i].address = coming_change.address
                       console.log("match and modify!")
                       found=true
                   }
            
            }
            if(found ==false)
            {
                console.log("type of normal ",typeof newData_3[0])
                console.log("type of new ",typeof coming_change)
                newData_3.push(coming_change)
            }
            newState.data=newData_3
            break;
        default:
            break;
    }
    return newState//返回拷贝出来的新的值
}
export default reducers

