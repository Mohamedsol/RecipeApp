import React, { Component } from 'react';
import './App.css';
import Form from './Component/Form'

class App extends Component {

  state = {
    recipes: []
  }
  

  recipeHandle = async (e) => {
    e.preventDefault();
    const recipeName= e.target.elements.recipeName.value;
    const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}&count=5`);
    const data = await res.json();
    console.log(data)
    this.setState({
      recipes: data.recipes
    })
    console.log(this.state.recipes)
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Recipe App</h1>
        </header>
        <Form recipeHandle={this.recipeHandle}/>
        {this.state.recipes.map( (recipe) => {
          return <div>{recipe.title}</div>
        }) }
      </div>
    );
 }
}

export default App;
