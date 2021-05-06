import store from "./store"
import type from "./store/type"
import axios from 'axios';

export default function GET() {
  // const _this=this; 

  axios.get("http://localhost:8181/api/GET")
    .then(function (resp) {

      let action = {//定义动作
        type: type.INITIALIZE,
        payload: resp.data.data
      }

      store.dispatch(action);

    })
    .catch(function (error) {
      console.log(error);
    });

  // save_data=[
  //   {
  //   key: '1',
  //   firstName: 'John',
  //   lastName: 'Brown',
  //   age: 32,
  //   address: 'New York No. 1 Lake Park',
  //   tags: ['nice', 'developer'],
  //   }
  // ]


}