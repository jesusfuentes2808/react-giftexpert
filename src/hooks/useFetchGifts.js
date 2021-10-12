import {useEffect, useState} from "react";
import {getGifts} from "../helpers/getGifts";

export const useFetchGifts = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(  category )
            .then((imgs) => {

                setState({
                    data: imgs,
                    loading: false,
                });

            });
    }, [category]);


    // setTimeout(
    //     () => {
    //         setState({
    //             data: [1,2,3,4,5,6,7],
    //             loading: false,
    //         }, 3000);
    //     }, 3000
    // )

    return state;
}