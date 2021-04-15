import React, {useEffect, useState} from "react"
import './App.css';
import Recipe from "./Recipe"

function App() {

  const APP_ID = '99d831d5'
  const APP_KEY = '86d104ee24adb538bd1d5dd7cc8ef302'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect( () => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="Recipes">
        {recipes.map(recipe=>(
          <Recipe 
          key={recipe.recipe.label}
          name={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          link={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
