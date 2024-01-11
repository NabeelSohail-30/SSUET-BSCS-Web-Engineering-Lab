// studentActions.js
export const SET_SELECTED_STUDENT = "SET_SELECTED_STUDENT";

export const setSelectedStudent = (studentId) => ({
  type: SET_SELECTED_STUDENT,
  payload: studentId,
});

export const FETCH_STUDENT_SUCCESS = "FETCH_STUDENT_SUCCESS";

export const fetchStudentSuccess = (student) => ({
  type: FETCH_STUDENT_SUCCESS,
  payload: student,
});

// studentReducer.js
import { SET_SELECTED_STUDENT } from "./studentActions";

const initialState = {
  selectedStudentId: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_STUDENT:
      return {
        ...state,
        selectedStudentId: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;

// rootReducer.js
import { combineReducers } from "redux";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
  student: studentReducer,
});

export default rootReducer;

// store.js
import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
