import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = () => {
        //  Valorant
        //console.log('Valorant');
        setCategories([ 'Valorant', ...categories ]);
        //setCategories( cat => [ 'Valorant', ...cat  ]);

    }

    return (
        <>
            {/* Titulo */}            
            <h1>GifExpertApp</h1>
            

            {/* Input */}
            <AddCategory setCategories={ setCategories } />

            {/* Listado de Gifs*/}
            
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })}
            </ol>
                {/* Gif Item */}
        </>
    )
}

export default GifExpertApp;