import { Switch, Route } from "react-router-dom"
import Home from "../src/component/Home"

import Contact from "./component/Contact";
import Services from "./component/Services";
import Error from "./component/Error";
import List from "./component/List";
import Albums from "../src/component/Albums";


function App() {
  return (
    <div className="App">
      <>
        <List />
        
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/albums" component={Albums} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route component={Error} />
          </Switch>



      </>
    </div>
  );
}

export default App;
