import { store } from "../../../store"


export function addToCart(state, item, img,  quantity, price, id) {

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

         

   
      arr.push(obj)

      store.dispatch({
        type: "CURRENT_ORDER",
        payload: arr
  
      });

      store.dispatch({

        type: "SET_AMOUNT_ORDER",
        payload: quantityToCart()
      })
  
  
    } else if(alreadyOnTheCart && quantity > 0) {

      alert("quantidade alterada")
      alreadyOnTheCart.quantity = quantity;
      alreadyOnTheCart.total = quantity * price;
      store.dispatch({

        type: "SET_AMOUNT_ORDER",
        payload: quantityToCart()
      })
    }
    
    
    else {
  
      alert("select one or more items to proceed with your purchase")

    
    }
  }