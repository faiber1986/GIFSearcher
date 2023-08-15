import { useState } from "react"
import './AddCategory.css'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const InputChange = ( event ) => {
        setInputValue(event.target.value)
    }

    const onSubmit = ( event ) => {
        
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        setInputValue('');
        onNewCategory( inputValue.trim() )
    }

    return (

        <form onSubmit={ onSubmit } className="form-search" >
            <input 
                className="input-search" 
                type="text"
                placeholder="Search GIFs"
                value={ inputValue }
                onChange={ InputChange }
            />
        </form>

    )
}
