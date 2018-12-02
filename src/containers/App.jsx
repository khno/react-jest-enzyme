import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./home/index.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        1
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
