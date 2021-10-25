import styles from '../../../styles/Carousel/Carousel.module.css'
import { useEffect, useState } from 'react';


  export default function CarouselItem (props) {

    const [images, setImages] = useState([])

    useEffect(()=>{
      

        setImages(props.item?.string)

    }, [props.item])
    function renderCarousel() {

        console.log(images)
        if(images !== undefined) {

            return(
                images?.map((image, index) => {


                    return(

                        <img
                       className={styles.carousel}
                        src={`${image}?w=500&fit=crop&auto=format`}
                        srcSet={`${image}?w=500&fit=crop&auto=format&dpr=2 2x`}
                        alt={index}
                        loading="lazy"
                        onClick={()=>{ 
                            props.setSlideImage(index)
                        }}
                        alt={`${props.alt} - ${index}`}
                      />
                    )
                })

            )
        }
    }

    return (
        <div>
                {renderCarousel()}   
        </div>
    //    
    );
  }
