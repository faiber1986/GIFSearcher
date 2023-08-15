
import { GifItem } from "../GifItem/GifItem";
import { useFetchGifs } from "../../../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => {

    const { images, isLoading} = useFetchGifs( category );

    return (
        <>
            <h5>{ category }</h5>
            {
                isLoading &&  ( <h5>Loading...</h5> )
            }
           
            <div>
                {
                    images.map( ( { image } ) => (
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
