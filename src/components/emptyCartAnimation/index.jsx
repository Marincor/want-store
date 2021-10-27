import { Typography } from '@mui/material';
import Lottie from 'react-lottie';
import styles from '../../styles/Lotties/Lotties.module.css'
import { defaultOptions } from './config';

export default function EmptyCartAnimation() {


    return(

        <div
            className={styles.container}
        > 
        <Typography variant="h3" component="h3">Your cart is empty!</Typography>
      <Lottie 
	    options={defaultOptions}
        height={300}
        width={300}
      />
    </div>
    )
}