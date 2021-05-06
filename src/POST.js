import store from "./store"
import type from "./store/type"
import axios from 'axios';

export default function POST()
{
    
    console.log(JSON.stringify(store.getState().data));
    axios.post("http://localhost:8181/api/POST",store.getState().data);
    // .then(function(resp){

    //    let action={//定义动作
    //     type:type.INITIALIZE,
    //     payload: [resp.data.data[0]]
    //   }
      
    //   store.dispatch(action);

    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    
}