import './GifGrid.css'
import { GifItem } from "../GifItem/GifItem";
import { useFetchGifs } from "../../../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => {

    const { images, isLoading} = useFetchGifs( category );

    return (
        <>
            <h2 className="category-title">{ category }</h2>
            {
                isLoading &&  ( <h5>Loading...</h5> )
            }
           
            <div className='image'> 
                {
                    images.map( ( image ) => (
                        <GifItem 
                        key={ image.id }
                        { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
