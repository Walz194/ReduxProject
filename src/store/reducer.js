import * as actionTypes from "./actions";

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
            console.log("Incremantality");
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            console.log("Decremantality");
            return{
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return{
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
           return{
               ...state,
             counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(),value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id,1);
            const updatedArray = state.results.filter(result=> result.id !== action.resultID)
            return{
                ...state,
                results: updatedArray //newArray
            }
    }
    return state;    
};

export default reducer;