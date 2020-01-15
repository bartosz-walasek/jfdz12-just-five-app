import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./navigation/Navigation";
import AlertDialogSlide from "./forms/components/AddDrinkSlide";
import "./App.css";
import { PageWrapper } from "./wrapper/PageWrapper";
import MapContainer from "./map/Map";
import { DrinkList } from "./drink-list/DrinkList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <PageWrapper>
          <Route path="/addDrink" component={AlertDialogSlide} />
          <Route path="/map" component={MapContainer} />
          <Route path="/alco" />
          <Route path="/" component={DrinkList} exact />
        </PageWrapper>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
