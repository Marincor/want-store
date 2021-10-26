
import { store } from "../../../store";


export default function setAmount (state, amount) {

    


    let count = state.amount;
  
    switch(amount) {
  
      case "reduce": count > 0 ? store.dispatch({ type: "SET_AMOUNT", payload: count -= 1}): false;
      break;
      case "increase" : store.dispatch({ type: "SET_AMOUNT", payload: count += 1});
      break;
      default : false;
      break;
    }
  
  }