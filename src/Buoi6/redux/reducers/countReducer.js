import { COUNT_UP, COUNT_DOWN } from "../actions/countAction";

const initState ={
    number: 0,
    
};
const countReducer = (state = initState, action) =>{

    switch(action.type){
        case COUNT_UP :
            state.number +=1;
            return {...state};
        
        case COUNT_DOWN :
            return {...state, number: state.number -1};

        default :
        return state;        

    }
};
export default countReducer;