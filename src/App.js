import logo from './logo.svg';
import Landing from "pages/LandingPage";
import Login from "pages/LoginPage";
import Register from "pages/RegisterPage";
import LoginMitra from "pages/LoginMitra";
import ListProduk from "pages/ListProdukPage";
import ProdukHaji from "pages/ProdukHajiPage";
import LandingPageBorrower from "pages/LandingPageBorrower";
import "assets/scss/style.scss";

import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/loginmitra" component={LoginMitra} />
          <Route
            exact
            path="/landingpageborrower"
            component={LandingPageBorrower}
          />
          <Route exact path="/listproduk" component={ListProduk} />
          <Route exact path="/produkhaji" component={ProdukHaji} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
