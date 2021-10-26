import getItems from "../../../services/api";
import { store } from "../../../store";

export default async function itemsStore() {

    try {
       await getItems().then(data => {
            
            store.dispatch({

              type: "PRODUCTS_INFO",
              payload: data.docs
            }); 
          
            
        })

    }
    catch(error) {

        console.log(error)
    }
    finally{


       


            store.dispatch({

                type: "lOADING_STATE",
                payload: false
              }); 
      
      
    }
}