import React, { Component } from "react";

import "./App.css";
import "./UserInput";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component {
  render() {
    const userName = "Aja";

    return (
      <div>
        <UserInput />
        <UserOutput userName={userName} />
        <UserOutput userName={userName} />
        <UserOutput userName={userName} />
      </div>
    );
  }
}

export default App;
