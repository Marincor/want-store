import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Cart from '.';
import { useState } from 'react';
import styles from '../../styles/Cart/Cart.module.css'
import Items from '../Items';
import { useSelector } from 'react-redux';
import { removeToTheCart2 } from '../actions/currentOrder/Delete';
import EmptyCartAnimation from '../emptyCartAnimation';



export default function ModalCart() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const state = useSelector(state => state)

  function removeToTheCart(id) {

    removeToTheCart2(state, id)
    
  }



  return (
    <div>
      <Button onClick={handleOpen}><Cart/> </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-cart"
        aria-describedby="items-of-cart"
      >
        <Box className={styles.modal}>
          {state.order.length === 0 ? <EmptyCartAnimation />: 
          
        <Items item={state.order} 
        removeToTheCart={removeToTheCart}
        delete
        cart
        />
      }
        </Box>
      </Modal>
    </div>
  );
}
