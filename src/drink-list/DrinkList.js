import React from 'react';
import { FloatingActionButtons } from '../forms/components/AddDrinkButton'
import Drink from '../drink/Drink';
import SearchPanel from '../drink-filter-components/SearchPanel';
import Popup from '../drink/Popup';



export class DrinkList extends React.Component {

  state = {
    drinks: [],
    ingredients: []
  }



  componentDidMount() {
    fetch("./data/drinks.json").then(r => r.json()).then(data => {
      this.setState({
        drinks: data.drinks
      })
    })
    fetch("./data/ingredients.json").then(r => r.json()).then(data => {
      this.setState({
        ingredients: data.ingredients


      })
    })
  }

  render() {
    return (
      <div>
        <SearchPanel />
         <FloatingActionButtons />

         {
            this.state.drinks.map(drink => <Drink key={drink.id} name={drink.name} recipe={drink.recipe} ingredients={drink.ingredients} power={drink.power} ingredients_name={drink.ingredients_name} img_url={drink.img_url}
            />)}
       {
            this.state.drinks.map(drink => <Popup key={drink.id} name={drink.name} recipe={drink.recipe} ingredients={drink.ingredients} power={drink.power} ingredients_name={drink.ingredients_name} img_url={drink.img_url}
            />)}
                   

</div>   )
  }
}
