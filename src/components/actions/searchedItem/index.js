import { store } from "../../../store"



export default function searchedTerm(term) {


    store.dispatch({

        type: "SEARCHED_ITEM",
        payload: term
    })


}