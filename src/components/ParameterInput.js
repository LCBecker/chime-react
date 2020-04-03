import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField'

const ParameterInput = ({id, label, defaultValue, onInputChange}) => {
  return (
    <React.Fragment>
      <TextField
        id={id}
        label={label}
        defaultValue={defaultValue}
        margin="normal"
        variant="outlined"
        />

      {/* <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput id={id} value={defaultValue} onChange={onInputChange} label={label} /> */}
    </React.Fragment>
  );
};

export default ParameterInput;