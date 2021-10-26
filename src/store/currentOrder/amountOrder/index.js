
// amount of itens included in the cart - cart component //

const initialState = 0;



export default function amountOrderReducer(state = initialState, action) {

    
    switch(action.type) {

        case "SET_AMOUNT_ORDER": return action.payload;
        break;
        default: return state;
        break;
    }

}