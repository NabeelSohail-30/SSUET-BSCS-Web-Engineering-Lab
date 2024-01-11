// studentReducer.js
import { FETCH_STUDENT_SUCCESS } from "./studentActions";

const initialState = {
  student: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT_SUCCESS:
      return {
        ...state,
        student: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
