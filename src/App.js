import logo from './logo.svg';
import Landing from "pages/LandingPage";
import Login from "pages/LoginPage";
import Register from "pages/RegisterPage";
import LoginMitra from "pages/LoginMitra";
import ListProduk from "pages/ListProdukPage";
import ProdukHaji from "pages/ProdukHajiPage";
import LandingPageBorrower from "pages/LandingPageBorrower";
import Informasi from "pages/InformasiPage";
import TentangKami from "pages/TentangKamiPage"
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
          <Route exact path="/informasi" component={Informasi} />
          <Route exact path="/tentangkami" component={TentangKami} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
