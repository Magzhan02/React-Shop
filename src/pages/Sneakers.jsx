import React from 'react'
import { useSelector } from 'react-redux';

import Card from '../components/Card/Card';
import Loader from '../components/ContentLoader/Loader';

function Sneakers() {
    const [searchValue,setSearchValue] = React.useState('')
    const {items,isLoading} = useSelector(({card}) => card)
    
    const onChangeInput = (event) =>{
    setSearchValue(event.target.value)
    }

    const clearState = () =>{
     setSearchValue('')
    }
    return (
        <div>
        <div className="header__content">
          <h1>{searchValue && searchValue.length < 40 ? `Поиск: ${searchValue}`: 'Все кроссовки'}</h1>
          <div className="search__block">
            <img src="/img/search.svg" alt="Seacrch" />
           { searchValue && <img src="/img/btn-remove.svg" alt="сlear" className="clear" onClick={clearState}/>}
            <input onChange={onChangeInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
       <div className="sneakers" > 
       {
         isLoading ?
         items
         .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase())) //Search
         .map((obj) => (
           <Card {...obj} isLoading={isLoading} key={obj.id} />
         ))
         :Array(10).fill(0).map((obj,index) => <Loader key={index}/>)  
       }
      </div>
   </div>
    )
}

export default Sneakers
