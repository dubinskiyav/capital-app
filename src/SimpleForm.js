import React from "react";
import Greetings4 from "./Greetings4";
import style from './style';
import TextField from './TextField';
import FirstNameField from './FirstNameField';

class SimpleForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    firstNameError: ""
  };

  validateName = name => {
    const regex = /[A-Za-zА-Яа-я]{3,}/;
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

  onLastNameBlur = () => {
    const { lastName } = this.state;

    const lastNameError = this.validateName(lastName);

    return this.setState({ lastNameError });
  };

  onLastNameChange = event =>
    this.setState({
      lastName: event.target.value
  });


  render() {
    const { firstNameError, firstName, lastName, lastNameError } = this.state;
    return (
      <div
        // избегайте использования стилей внутри компонентов
        /* // Так делать не надо
        style={{
          margin: 500,
          padding: 10,
          width: 300,
          border: "1px solid black",
          backgroundColor: "black",
          color: "white"
        }} */
        style={style.form}  // Лучше делать так
      >
        <FirstNameField onChange={this.onFirstNameChange}
                        onBlur={this.onFirstNameBlur}
                        error={firstNameError} />
        <div style={style.inputGroup}>
          <TextField name="lastName"
                     label="Last name:"
                     onChange={this.onLastNameChange}
                     onBlur={this.onLastNameBlur}
                      error={lastNameError} />
          </div>

        <Greetings4 firstName={firstName} lastName={lastName} />
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