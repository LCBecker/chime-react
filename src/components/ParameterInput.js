import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup';

const ParameterInput = ({id, label, value, minValue, maxValue, onInputChange }) => {
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  /* If the reset button being clicked, we need to be able to reset the inputValue from props */
  useEffect(() => {
    setInputValue(value);
    setHasError(false);
  }, [value])
  
  const validateInput = (newValue) => {
    try {
      const floatValue = parseFloat(newValue)
      if (!floatValue.isNaN && (minValue == null || newValue > minValue) && 
      (maxValue == null || newValue < maxValue)) {
        setInputValue(newValue);
        setHasError(false);
        onInputChange(newValue);
      } else {
        setHasError(true);
        setInputValue(newValue);
      }
    } catch (err) {
      setHasError(true);
      setInputValue(newValue);
    }
  }

  return (
    <FormGroup>
      <TextField
        id={id}
        label={label}
        value={inputValue}
        error={hasError}
        margin="normal"
        variant="outlined"
        onChange={ e => { validateInput(e.target.value) }}
      />
    </FormGroup>
  );
};

export default ParameterInput;