const initialState={
  num:0
}

const reducer =(state=initialState,action)=>{
  const newState={...state};
  
  if(action.type==="Add"){
    newState.num++;
  }

  if(action.type==="Reduce"){
    newState.num--;
  }

  return newState;
}

export default reducer;