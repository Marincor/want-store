import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Cart from '.';
import { useState } from 'react';
import styles from '../../styles/Cart/Cart.module.css'
import Items from '../Items';
import { useSelector } from 'react-redux';



export default function ModalCart() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const state = useSelector(state => state)
  console.log(state)

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
        <Items item={state.order} 
        
        delete
        cart
        />
        </Box>
      </Modal>
    </div>
  );
}
