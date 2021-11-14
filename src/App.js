import React from "react";
import "./App.css";
import Text from "./fullname";
import Profile from "./profilephoto";
import Addresses from "./adress";

class App extends React.Component {
  state = {
    Person: { Name: "", Bio: "", Imgsrc: "", ProfessionFinal: "" },
    Shows: true,
  };
  HandleClick = () => {
    this.setState({ Shows: !this.state.Shows });
  };
  render() {
    return (
      <>
        {this.state.Shows ? (
          <>
            <Text />
            <Profile />
            <Addresses />
          </>
        ) : null}
        <div className="MYProfile">
          <button onClick={this.HandleClick}>Show/Hide</button>
        </div>
      </>
    );
  }
}

export default App;
