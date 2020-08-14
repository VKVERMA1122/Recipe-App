import React from 'react'

const Recipe = ({title,image,calories,ingredients})=>{
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt="not found"></img>
            <p>Calories-{calories}</p>
            Ingredients-
            <ol>
            {ingredients.map((ingredient)=>(
                <li>{ingredient.text}</li>
            ))}
            </ol>
        </div>
    )
}

export default Recipe