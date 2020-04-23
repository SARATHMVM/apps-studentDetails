const initialState = {
    loading : true,
    studentDetails : [],
    selectedStudent : [],
    loadingStudent : true
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
    case "UPDATESTUDENTDETAILS": {
      return{
        ...state,
        loading : false,
        studentDetails : action.value
      };
    }
    case "GETSELECTEDSTUDENT": {
      return{
        ...state,
        loadingStudent : false,
        selectedStudent : action.value
      };
    }
    
    default:
      return state;
}    
}

export default reducer;