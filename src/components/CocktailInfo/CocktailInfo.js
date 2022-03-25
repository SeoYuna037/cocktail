import React from 'react'
import { Link } from 'react-router-dom'
import './cocktail-info.scss'


const CocktailInfo = ({image, name, id, info, glass}) => {
    return (
        <section className='cocktail'>
            <div className='cocktail-img'>
                <img src={image} alt={name} />
            </div>
            <div className='cocktail-info'>
                <h2>{name}</h2>
                <span>{glass}</span>
                <span>{info}</span>
            <Link to={`/cocktail/${id}`} className="cocktail-btn-detail">Read More</Link>
            </div>
        </section>
    )
}

export default CocktailInfo
