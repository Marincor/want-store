import Lottie from 'react-lottie';
import { defaultOptions } from './config';
import styles from '../../styles/Lotties/Lotties.module.css'
import { Typography } from '@mui/material';

export default function ErrorAnimation() {


    return(

        <div
            className={styles.container}
        > 
        <Typography> Error 404 - Page not found </Typography>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
    )
}