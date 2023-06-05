import * as React from 'react';
import { Field, useField } from "formik";
import { TextField } from '@mui/material';
import style from './ComponentDate.module.scss';

interface MaterialDateProps {
  label: string;
  className: string;
  name: string;
}

interface ComponentDateProps {
  className?: string;
  id: string;
  name: string;
  label: string;
}

const MaterialDate: React.FC<MaterialDateProps> = ({ className, name, label }) => {
  const [field, meta, helpers] = useField(name);
  const mudanca = (event: { target: { value: string } }) => {
    helpers.setValue(event.target.value)
  }

  return (
    <div className={style.container}>
      <TextField
        fullWidth
        variant="outlined"
        id={style.textField}
        label={label}
        type="date"
        className={className}
        InputLabelProps={{
          shrink: true
        }}
        value={field.value}
        onChange={mudanca}
      />
    </div>
  );
}

const ComponentDate: React.FC<ComponentDateProps> = ({ className, id, name, label }) => {
  return (
    <Field
      className={className}
      id={id}
      as={MaterialDate}
      name={name}
      label={label}
    />
  )
}

export default ComponentDate;

