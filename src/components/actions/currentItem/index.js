import getItemByID from "../../../services/api/itemById";
import { store } from "../../../store";

export default async function getCurrentItems(id, router) {

    let finish = false;

  try {

    // set loadingAnimation //
    store.dispatch({
      type: "lOADING_STATE",
      payload: true,
    });

    // API request and set items//
    await getItemByID(id).then((data) =>{

    
      store.dispatch({
        type: "CURRENT_ITEM",
        payload: data,
      });

      finish = data
    }
    );
  } catch (error) {
    console.log(error);
  } finally {

    // turn off animation loading //

    if (finish.app_sale_price) {


        store.dispatch({
          type: "lOADING_STATE",
          payload: false,
        });
    } else {

      return(
        alert("Ali Express Api Exceeded... try again or comeback later!"),
        setTimeout(()=>{
          router.push("/404")
        },2000)
        
      )
     
    }
  }
}
