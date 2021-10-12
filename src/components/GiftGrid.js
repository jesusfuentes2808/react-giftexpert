import {useEffect, useState} from "react";
import GifGridItems from "./GifGridItems";
import {getGifts} from "../helpers/getGifts";
import {useFetchGifts} from "../hooks/useFetchGifts";

function GiftGrid({category}) {

    //const [count, setCount] = useState(0)
    const [images, setImages] = useState([]);

    // si no se envian dependencias solo se ejecutan una vez
    /*useEffect(() => {
        /*getGifts( category ).then( img => {
            return setImages(img);
        });*/
    /*
        getGifts( category ).then( setImages );

    }, [ category ]);*/

    const {data, loading} = useFetchGifts(category);

    return <>
                <h3 className="animate__animated animate__fadeIn">{ category }</h3>
                {loading && <p>Loading...</p>}
                <div className="card-grid">
                        {
                            data.map((item) => <GifGridItems key={item.id} {...item}/>)
                        }
                </div>
            </>
}

export default GiftGrid;