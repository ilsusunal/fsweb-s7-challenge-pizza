import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

import OrderPizza from "./components/OrderPizza";
import MainPage from './components/MainPage';
import Success from "./components/Success";

function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/siparis-olustur" component={OrderPizza} />
        <Route exact path="/" component={MainPage} />
        <Route path="/siparis-alindi" component={Success}/>
      </Switch>
    </Router>
    );
}

export default App
