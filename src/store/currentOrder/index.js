

const initialState = [];



export default function currentOrderReducer(state = initialState, action) {

    switch(action.type) {

        case "CURRENT_ORDER": return action.payload;
        break;
        default: return state;
        break;
    }

}