import React,{useEffect, useState} from 'react';

import Loading from '../../components/Loading/Loading';

import {useParams, Link} from 'react-router-dom';

import './cocktail-desc.scss'

const CocktailDesc = () => {
    const {id}=useParams();
    const [loading, setLoading]=useState(false);
    const [cocktail, setCocktail]=useState(null);

    useEffect(()=>{
        setLoading(true)
        async function getCocktail(){
            try{
                const response=await fetch(
                   `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                )
                const data=await response.json()
                if(data.drinks){
                    const {
                      strDrink: name,
                      strDrinkThumb: image,
                      strAlcoholic: info,
                      strCategory: category,
                      strGlass: glass,
                      strInstructions: instructions,
                      strIngredient1,
                      strIngredient2,
                      strIngredient3,
                      strIngredient4,
                      strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                      strIngredient1,
                      strIngredient2,
                      strIngredient3,
                      strIngredient4,
                      strIngredient5,
                    ]
                    const newCocktail = {
                      name,
                      image,
                      info,
                      category,
                      glass,
                      instructions,
                      ingredients,
                    }
                    setCocktail(newCocktail)
                  } else {
                    setCocktail(null)
                  }
                } catch (error) {
                  console.log(error)
                }
                setLoading(false)
              }
              getCocktail()
            }, [id])
            if (loading) {
              return <Loading/>
            }
            if (!cocktail) {
              return <h2 className='section-title'>no cocktail to display</h2>
            } else {
              const {
                name,
                image,
                category,
                info,
                glass,
                instructions,
                ingredients,
              } = cocktail
    return (
        <section className='section cocktail-desc'>
        <Link to='/' className='back-btn'>
          back home
        </Link>
        <h2 className='cocktail-desc-title'>{name}</h2>
        <div className='cocktail-desc-container'>
          <img src={image} alt={name}></img>
          <div className='cocktail-desc-info'>
            <p>
              <span className='cocktail-desc-data'>Name :</span> {name}
            </p>
            <p>
              <span className='cocktail-desc-data'>Category :</span> {category}
            </p>
            <p>
              <span className='cocktail-desc-data'>Info :</span> {info}
            </p>
            <p>
              <span className='cocktail-desc-data'>Glass :</span> {glass}
            </p>
            <p>
              <span className='cocktail-desc-data'>Instructons :</span> {instructions}
            </p>
            <p>
              <span className='cocktail-desc-data'>Ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )}
}

export default CocktailDesc
