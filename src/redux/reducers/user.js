import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default: return state;
  }
}
export default userReducer;
