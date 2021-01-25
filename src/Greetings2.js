import React from "react";

class Greetings2 extends React.Component {
    render() {
      return (
        <div>Эй ты! {this.props.firstName} {this.props.lastName}!</div>
      );
    }
}

export default Greetings2;