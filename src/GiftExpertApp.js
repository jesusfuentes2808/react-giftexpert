import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

function GiftExpertApp() {
    //const [categories, setCategories] = useState([ 'One Punch', 'Samurai X', 'Dragon Ball' ]);
    const [categories, setCategories] = useState([ 'One Punch' ]);

    /*const handleAdd = () => {
        //setCategories([...categories, 'Nuevo']);
        setCategories(cats => [...cats, 'Nuevo']);
    }*/

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>

                {
                    categories.map(
                        (category) => (
                            <GiftGrid key={category} category={category} />
                        )
                    )
                }
            </ol>
        </>
    );
}

export default GiftExpertApp;