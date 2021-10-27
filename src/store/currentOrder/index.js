
const currentItem = () => {


    if (typeof window !== 'undefined') {

       return JSON.parse(localStorage.getItem("CURRENT_ORDER"));
    }

    return []
}
const initialState = currentItem()|| [];



export default function currentOrderReducer(state = initialState, action) {

    switch(action.type) {

        case "CURRENT_ORDER": return action.payload;
        break;
        default: return state;
        break;
    }

}