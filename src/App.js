import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../src/component/Home"

import Team from "./component/Team";
import Services from "./component/Services";
import Error from "./component/Error";
import List from "./component/List";
import Albums from "../src/component/Albums";


function App() {
  return (
    <BrowserRouter>
    <div className="App">

          <List />

          <Switch>

            <Route exact path="/home" component={Home} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/services" component={Services} />
            <Route component={Error} />
          </Switch>
        



    </div>
    </BrowserRouter>
  );
}

export default App;
