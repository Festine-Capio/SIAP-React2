import logo from './logo.svg';
import Landing from "pages/LandingPage";
import Acc from "pages/AccessPage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/acc" component={Acc} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
