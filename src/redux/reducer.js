import { ADD_USER_ASYNC, ADD_USER } from "./constant";


const intialState = {
  users:{}
}

function userDataReducer(state=intialState, action) {
  switch (action.type) {
    case ADD_USER:
      // console.log(action,"bbbbbbbbbbbbbb")
      // const data1 = action && state.value && state.value.data && state.value.data.results
      return Object.assign({}, state, {
        users: action.value.data.results
      });
    default:
      return state;
  }
}

export default userDataReducer;
