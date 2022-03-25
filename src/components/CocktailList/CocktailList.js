import React from 'react'
import CocktailInfo from '../CocktailInfo/CocktailInfo'
import Loading from '../Loading/Loading'
import { useGlobalContext } from '../../context'

import './cocktail-list.scss'

const CocktailList = () => {
    const {cocktails, loading}=useGlobalContext();

    if(loading){
        return <Loading/>
    }
    if(cocktails.length < 1){
        return <h2 className="no-title title">I can't find</h2>
    }

    return (
        <section className='section cocktails'>
            <h2 className='list-title title'>
                Cocktails
            </h2>
            <div classname="cocktails-list">
                <div className="cocktail-list">
                    {
                        cocktails.map((item)=>{
                            return <CocktailInfo key={item.id} {...item}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CocktailList
