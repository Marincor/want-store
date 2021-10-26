
// amount of itens included in the select product by ID - countAmount component //

const initialState = 1;



export default function countAmountReducer(state = initialState, action) {

    switch(action.type) {

        case "SET_AMOUNT": return action.payload;
        break;
        default: return state;
        break;
    }

}