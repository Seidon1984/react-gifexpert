import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setInputValue] = useState('');        

    const onInputChange = ({ target }) => {        
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const onNewValue = inputValue.trim();
        if ( onNewValue.length < 1 ) return;
        //setCategories( (categories) => [ inputValue, ...categories ]);
        onNewCategory( onNewValue );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange } 
            />
        </form>
        
    )
}
