import React from "react";
import DogList from "../components/Dog/DogList/DogList";
import DogHatico from "../components/Dog/DogHatico/DogHatico";
import DogPatron from "../components/Dog/DogPatron/DogPatron";
import { Switch, Route, Link } from "react-router-dom";

function Dog() {
  return (
    <>
      <h3>Dog page</h3>

      <DogList />
      <nav>
        <li>
          <Link to='/dog/patron'>Patron</Link>
        </li>
        <li>
          <Link to='/dog/hatico'>Hatico</Link>
        </li>
      </nav>



      <Switch>
        <Route path="/dog/patron">
          <DogPatron />
        </Route>
        <Route path="/dog/hatico">
          <DogHatico />
        </Route>
      </Switch>
    </>
  );
}

export default Dog;
