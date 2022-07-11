
import { useFechGif } from "../hooks/useFechGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const {image, load} = useFechGif(category);
   

    return (
        <div className='d-flex align-self-stretch flex-wrap'>
            {
                load ? <h2>Cargando</h2> :
                image.map(imagen => <GifItem key={imagen.id} {...imagen} />)       
            }
        </div>
    )
}
