


const initialState = '';
   
   export default function searchedItemReducer(state = initialState, action) {
   
       switch(action.type) {
   
           case "SEARCHED_ITEM": return action.payload
           break;
           default: return state;
           break;
       }
   
   
   }
   
   
   