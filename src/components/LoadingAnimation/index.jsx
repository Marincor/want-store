import Lottie from 'react-lottie';
import { defaultOptions } from './config';
import styles from '../../styles/Lotties/Lotties.module.css'

export default function LoadingAnimation() {


    return(

        <div
            className={styles.container}
        > 
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
    )
}