import { USER_FETCHING, USER_SUCCESS, USER_FAILURE } from '../actions';

export const initialState = {
  fetchingData: false,
  userData: {},
  error: ''
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCHING:
      return {
        ...state,
        fetchingData: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        userData: action.payload,
      };
    case USER_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;
