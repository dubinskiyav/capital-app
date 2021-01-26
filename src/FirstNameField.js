import React from 'react';
import TextField from './TextField';

const FirstNameField = ({...rest}) => (
    // всё, что будет передано компоненту в виде свойств, попадёт в объект rest
    <TextField name="firstName"
              label="Имя:"
              {...rest} // Тут берётся объект rest, из него выделяются его свойства, 
                        // которые передаются компоненту TextField
    />
);

export default FirstNameField;