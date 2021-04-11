import logo from './logo.svg';
import Landing from "pages/LandingPage";
import Login from "pages/LoginPage";
import Register from "pages/RegisterPage";
import LoginMitra from "pages/LoginMitra";
import "assets/scss/style.scss";
import Foo from "components/FooterContent";
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
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
