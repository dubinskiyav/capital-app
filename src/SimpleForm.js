import React from "react";
import Greetings4 from "./Greetings4";

class SimpleForm extends React.Component {
  state = {
    firstName: "",
    firstNameError: ""
  };

  validateName = name => {
    const regex = /[A-Za-z]{3,}/;
    return !regex.test(name)
      ? "Имя должно содержать как минимум три символа. Цифры и спецсимволы не допускаются."
      : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;

    const firstNameError = this.validateName( firstName );

    return this.setState({ firstNameError });
  };

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value + ' и остальные'
    }
  );
  render() {
    const { firstNameError, firstName } = this.state;
    return (
      <div>
        <div>
          <label>
            First name:
            <input 
              type="text" 
              name="firstName" 
              onChange={this.onFirstNameChange}
              onBlur={this.onFirstNameBlur}
            />
            {firstNameError && <div>{firstNameError}</div>}
          </label>
        </div>
        <Greetings4 firstName={firstName} />
      </div>
    );
  }
}

export default SimpleForm;

const App = () => (
  <div>
    <SimpleForm />
  </div>
);