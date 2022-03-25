import React,{useRef,useEffect} from 'react'
import './searchform.scss'

import { useGlobalContext } from '../../context'

const SearchForm = () => {
    const {setSearchTerm}=useGlobalContext();
    const searchValue=useRef("");

    useEffect(()=>{
        searchValue.current.focus();
    },[])

    const searchCocktail=()=>{
        setSearchTerm(searchValue.current.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <section className='section search'>
            <form className='contaier search-form' onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input 
                    type="text"
                    className='search-form-name' 
                    name='name' 
                    id='name' 
                    ref={searchValue} 
                    onChange={searchCocktail} 
                    placeholder="search Cocktail Name!"
                />
            </form>
        </section>
    )
}

export default SearchForm
