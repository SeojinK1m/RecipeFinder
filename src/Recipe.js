import React from "react"
import style from './recipe.module.css'

const Recipe = (props) => {
    return(
        <a target="_blank" href={props.link} className={style.recipe}>
                <h1>{props.name}</h1>
                <p>{props.calories} calories</p>
                {props.ingredients.map(ingredient=>(
                    <p className={style.ingredient}>{ingredient.text}</p>
                ))}
                <img src={props.image} alt="bok bok" className={style.image}/>
        </a>
        
    );
}

export default Recipe