import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../src/component/Home"

import Team from "./component/Team";
import Venues from "./component/Venues";
import Error from "./component/Error";
import List from "./component/List";
import Albums from "../src/component/Albums";


function App() { 

  return (
      <div className="App">
        <List />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/venues" component={Venues} />
          <Route component={Error} />
        </Switch>
      </div>
  );
}

export default App;
