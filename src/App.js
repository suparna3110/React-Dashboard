import React from 'react';
import './App.scss';
import { Customizations, initializeIcons } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import theme from "./theme/theme";

class App extends React.PureComponent{
  // constructor(props) {
  //   super(props);
  //   // Customizations.applySettings({ theme });
  //   initializeIcons()
  // }
  render() {
    return(
      <PrimaryButton text= "I am a button"/>
    );
  }

}
export default App;
