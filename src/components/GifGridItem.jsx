import PropTypes from 'prop-types';

export const GifGridItem = ( { title, url } ) => {

    return (
        <div className='card'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

