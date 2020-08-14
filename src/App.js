import React,{ useEffect, useState } from 'react';
import Recipe from './Recipe'

function App() {
const  APP_ID=f0321ec8
const  APP_KEY=e7c141eb38722bfdd28f2da70b693321

  const [recipes,setrecipes]=useState([])
  const [search,setsearch]=useState('')
  // useEffect(()=>{
  //   getRecipe()
  // },[])

  const getRecipe=async()=>{
    const res=await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data=await res.json()
    setrecipes(data.hits)
    setsearch('')
  }
  return (
    <div>
      <input type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}}></input>
      <button onClick={getRecipe}>search</button>
      {recipes.map((recipe)=>
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        image={recipe.recipe.image} 
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients} 
        />
      )}
    </div>
  );
}

export default App;
