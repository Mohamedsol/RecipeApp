import React from 'react'

const Recipes = props => {
    return (
        <div>
        {props.recipes.map( (recipe) => {
          return <div>{recipe.title}</div>
        }) }
        </div>
    )
}

export default Recipes
