
const initialState = {

    info: null
}



export default function itemReducer(state = initialState, action) {

    switch(action.type) {

        case "PRODUCTS_INFO": return action.payload;
        break;
        default: return state;
        break;
    }

}