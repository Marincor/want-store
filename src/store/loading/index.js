


const initialState = {
 loading: true
};

export default function loadingReducer(state = initialState, action) {

    switch(action.type) {

        case "lOADING_STATE": return action.payload
        break;
        default: return state;
        break;
    }


}


