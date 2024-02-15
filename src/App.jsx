import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import './App.css'

import OrderPizza from "./components/OrderPizza";
import MainPage from './components/MainPage';
import Success from "./components/Success";
import React, { useState } from "react";

function App() {
  const [orderData, setOrderData] = useState(null);
  const history = useHistory();
  const handleOrderData = (d) => {
    setOrderData(d);
    
    console.log("DATALAR APP DOSYASINA GEÇMİŞ",d);
  };

  return (
    <Router>
      <Switch> 
        <Route exact path="/"  >
          <MainPage />
        </Route>
        <Route path="/siparis-olustur"  >
          <OrderPizza onSubmit={handleOrderData}/>
        </Route>
        <Route path="/siparis-alindi">
        <Success orderData={orderData}/>
        </Route>
      </Switch>
    </Router>
    );
}

export default App
