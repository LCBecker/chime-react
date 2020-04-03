import React from 'react';
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup';

const ParameterInput = ({id, label, defaultValue, onInputChange}) => {
  
  return (
    <FormGroup>
      <TextField
        id={id}
        label={label}
        defaultValue={defaultValue}
        margin="normal"
        variant="outlined"
        // onChange={(e) => { onInputChange(id, e.target.value) }} Might want to use redux store to store value!
      />
    </FormGroup>
  );
};

export default ParameterInput;