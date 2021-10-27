import { store } from "../../../store"


export function addToCart(state, item, img,  quantity, price, id, notify, notifyError) {

    const obj =   {
      product_title: item,
       product_main_image_url: img,
      quantity: quantity,
      price: price,
      total: price * quantity,
      id: id
    }

    const arr = state.order || [];

    const quantityToCart = () =>{

      let count = 0;
      state.order.forEach((item) =>{
  
        return count += item.quantity
  
      })
  
      return count
    }

    const alreadyOnTheCart = state.order.find(item => item.id === id)

   

    if(quantity > 0 && alreadyOnTheCart === undefined ) {

         
      notify("Included to the cart")
   
      arr.push(obj)

      window.localStorage.setItem("CURRENT_ORDER", JSON.stringify(arr))
      store.dispatch({
        type: "CURRENT_ORDER",
        payload: arr
  
      });

      store.dispatch({

        type: "SET_AMOUNT_ORDER",
        payload: quantityToCart()
      })
  
  
    } else if(alreadyOnTheCart && quantity > 0) {

      notify("Amount changed")
      alreadyOnTheCart.quantity = quantity;
      alreadyOnTheCart.total = quantity * price;
      store.dispatch({

        type: "SET_AMOUNT_ORDER",
        payload: quantityToCart()
      })

      window.localStorage.setItem("CURRENT_ORDER", JSON.stringify(state.order))
    }
    
    
    else {
  
      notifyError("Select one or more items to proceed with your purchase")

    
    }
  }