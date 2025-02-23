import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Ronaldo",
    channel: "Hoi Dap IT",
  };

  render() {
    return (
      <>
        <div className="first">
          Hello My Component, My name is {this.state.name}
        </div>
        <div className="second">My youtube channel: {this.state.channel}</div>
      </>
    );
  }
}

export default MyComponent;
