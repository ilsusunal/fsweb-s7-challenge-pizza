import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css'

import OrderPizza from "./components/OrderPizza";
import MainPage from './components/MainPage';
import Success from "./components/Success";
import React, { useState} from "react";

function App() {
  const [orderData, setOrderData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOrderData = (d) => {
    setOrderData(d);
    setIsSubmitted(true);
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
        {console.log("Rendering Success component. isSubmitted:", isSubmitted)}
        {console.log("AKTARILAN ORDER DATA:", orderData)}
        {isSubmitted && <Success orderData={orderData} />}
        </Route>
      </Switch>
    </Router>
    );
}

export default App
