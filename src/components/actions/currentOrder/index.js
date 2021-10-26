import { store } from "../../../store"


export function addToCart(state, item, img,  quantity, price) {

    const obj =   {
      product_title: item,
       product_main_image_url: img,
      quantity: quantity,
      price: price,
      total: price * quantity
    }

    const arr = state.order || [];

    const quantityToCart = () =>{

      let count = 0;
      state.order.forEach((item) =>{
  
        return count += item.quantity
  
      })
  
      return count
    }

   


    if(quantity > 0) {
   
      arr.push(obj)

      store.dispatch({
        type: "CURRENT_ORDER",
        payload: arr
  
      });

      store.dispatch({

        type: "SET_AMOUNT_ORDER",
        payload: quantityToCart()
      })
  
  
    } else {
  
      alert("select one or more items to proceed with your purchase")

    
    }
  }