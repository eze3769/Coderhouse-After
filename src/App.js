import "./App.css";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import { DetailsContainer } from "./components/DetailsContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/:product_id">
            <DetailsContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
