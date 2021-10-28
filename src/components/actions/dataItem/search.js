
import getItemsSearched from "../../../services/api/search";
import { store } from "../../../store";

export default async function searchStore(name) {

    try {
       await getItemsSearched(name).then(data => {
  
            store.dispatch({

              type: "PRODUCTS_INFO",
              payload: data.docs || data
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


