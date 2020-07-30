import React from 'react';
import { Route, Router } from "react-router-dom";
import './App.scss';
import history from "./history";
import Routing from "./routing/routing";
import { Customizations, initializeIcons } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import theme from "./theme/theme";

class App extends React.PureComponent{
  constructor(props) {
    super(props);
    // Customizations.applySettings({ theme });
    initializeIcons()
  }
  render() {
    return(
      <div >
        <Router history={history}>
          <Route path="/*" render={() => <Routing />} />
        </Router>
      </div>
      // <PrimaryButton text= "I am a button"/>
    );
  }

}
export default App;
