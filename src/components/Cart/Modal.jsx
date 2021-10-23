import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cart from '.';
import { useState } from 'react';
import styles from '../../styles/Cart/Cart.module.css'



export default function ModalCart() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="modal-cart" variant="h6" component="h2">
            itens
          </Typography>
          <Typography id="items-of-cart" sx={{ mt: 2 }}>
           itens
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
