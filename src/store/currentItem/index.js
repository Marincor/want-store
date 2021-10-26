

const initialState = null;



export default function currentItemReducer(state = initialState, action) {

    switch(action.type) {

        case "CURRENT_ITEM": return action.payload;
        break;
        default: return state;
        break;
    }

}