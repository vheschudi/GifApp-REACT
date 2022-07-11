
import { useState, useEffect } from 'react';
import { getGif } from '../helpers/getGifs';

export const useFechGif = (category) => {
      
    const [image, setimage] = useState([]);
    const [load, setload] = useState([true]);

    const getImages = async () => {

        const newImages = await getGif(category);
        setimage(newImages);

        setload(false);

    }

    useEffect(() => {
        getImages();

    }, [])

  return {
    image, /* image: image */
    load, /*  load: load */
  };
}
