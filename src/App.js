import "./App.css";
import Cat from "./pages/Cat";
import Dog from "./pages/Dog";
import ToDo from "./pages/ToDo";
import CatAnton from "./pages/CatAnton";
import CatName from "./pages/CatName";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact>
            <ToDo />
          </Route>

          <Route path="/cat" exact>
            <Cat />
          </Route>

          <Route path="/cat/anton">
            <CatAnton />
          </Route>

          <Route path="/cat/:catName">
            <CatName />
          </Route>


          <Route path="/dog">
            <Dog />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
