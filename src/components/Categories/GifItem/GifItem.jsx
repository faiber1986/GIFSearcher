import './GifItem.css'

export const GifItem = ( { title, url }) => {

    return (
        <div className='gif-content'>
            <img  className="category-img" src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
    
}
