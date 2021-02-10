import { ADD_DATA,SUB_DATA  } from "../actionTypes";


export const addData = (content) => ({
  
  type: ADD_DATA,
  payload: content
});

export const removeData = (content) => ({
  
  type: SUB_DATA,
  payload: content
});



