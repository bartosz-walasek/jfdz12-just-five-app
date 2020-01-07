import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Drink from './Drink/Drink';
import { Navbar } from './navigation/Navigation';
import { Shops } from './shop-list/ShopList';
import AlertDialogSlide from './forms/components/AddDrinkSlide'
import { FloatingActionButtons } from './forms/components/AddDrinkButton'
import './App.css'
import { PageWrapper } from './wrapper/PageWrapper';
import { DrinkSearchField } from './drink-filter-components/DrinkSearchField';
import { IngredientsSearchMulitpleSelect } from './drink-filter-components/IngredientsSearchMulitpleSelect';
import { AlkoSearchRadio } from './drink-filter-components/AlkoSearchRadio';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <PageWrapper>
          <Route
            path="/shops"
            component={Shops}
          />
          <Route
            path="/addDrink"
            component={AlertDialogSlide}
          />
          <Route
            path="/map"

          />
          <Route
            path="/alco"

          />
          <Route
            path="/"
            component={Drinks}
          />
        </PageWrapper>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

class Drinks extends React.Component {

  state = {
    drinks: [],
    ingredients: []
  }



  componentDidMount() {
    fetch("./drinks.json").then(r => r.json()).then(data => {
      this.setState({
        drinks: data.drinks
      })
    })
    fetch("./ingredients.json").then(r => r.json()).then(data => {
      console.log('data.ingredients:', data);
      this.setState({
        ingredients: data.ingredients


      })
    })
  }

  render() {
    return (
      <div>
        Lista Drinków:
        <div>
          <Grid container spacing={5} justify="center" alignItems="center">
            <Grid item>
              <DrinkSearchField />
            </Grid>
            <Grid item>
              <IngredientsSearchMulitpleSelect />
            </Grid>
            <Grid item>
              <AlkoSearchRadio />
            </Grid>
          </Grid>
        </div>
        <div>

          {
            this.state.drinks.map(drink => <Drink key={drink.id} name={drink.name} recipe={drink.recipe} />)
          }
        </div>
        <FloatingActionButtons />
      </div>
    )
  }
}

export default App;
