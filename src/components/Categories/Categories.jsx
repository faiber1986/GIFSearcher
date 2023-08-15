import { useState } from "react";
import { AddCategory } from "./AddCategory/AddCategory";
import { GifGrid } from "./GifGrid/GifGrid";

export const Categories = () => {

    const [ categories, setCategories ] = useState(['Death Note'])

    const addCategory = ( newCategory ) => {

        // Validar que se creen categorías únicas
        if ( categories.includes( newCategory ) ) return; 

        // Agregar nueva categoría
        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>
            <AddCategory 
                onNewCategory={ addCategory }
            />

            { categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
                ))
            }

        </>
    )
}

