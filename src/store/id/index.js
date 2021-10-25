


const initialState = {
 id: 26
};

export default function idReducer(state = initialState, action) {

    switch(action.type) {

        case "PRODUCT_ID": return action.payload
        break;
        default: return state;
        break;
    }


}


