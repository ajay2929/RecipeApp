import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
         <h1>{title}</h1>
         <ol>
            {ingredients.map(ingredients => (
                <li className={style.ingredients}>{ingredients.text}</li>
            ))}  
         </ol>
         <p className={style.calories}> Calories Per Serving: {calories}</p>
         <img className={style.image}  src={image} alt=""/>
         </div>
    );

}

export default Recipe;