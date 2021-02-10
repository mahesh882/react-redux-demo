import { ADD_DATA,SUB_DATA } from "../actionTypes";

const initialState = {
  dataObj:0,
 
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA: {
      const data = action.payload;
      return {
        ...state,
        dataObj:data,

      };
    }
     case SUB_DATA: {
      const data = action.payload;
      return {
        ...state,
        dataObj:data,

      };
    }
    default:
      return state;
  }
}
