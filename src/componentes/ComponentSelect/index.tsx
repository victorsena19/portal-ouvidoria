import { ErrorMessage, Field, FieldInputProps, useField } from 'formik';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { ReactNode } from 'react';
import React from 'react';
import ComponentMsmErro from 'componentes/ComponentMsmErro';

interface MaterialSelectProps extends FieldInputProps<string> {
    errorString: string;
    children: ReactNode;
    label: string;
    id: string;
    className?: string;
}

interface Props {
    label: string;
    name: string;
    className?: string;
    itens: { label: string; value: string }[];
}

const MaterialSelect = ({className, errorString, label, children, value, name}: MaterialSelectProps) => {

        const [field, meta, helpers] = useField(name);
        const handleChange = (event: { target: { value: string } }) => {
            helpers.setValue(event.target.value);
        };
    return (
        <FormControl fullWidth>
            <InputLabel id={name} htmlFor={name}>{label}</InputLabel>
            <Select
                className={className}
                labelId={name}
                value={value}
                onChange={handleChange}
                label={label}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                {children}
            </Select>
            <FormHelperText>{errorString}</FormHelperText>
        </FormControl>
    )

    }

    const ComponentSelect: React.FC<Props> = ({className, label, itens, name }: Props) => {
        return (
            <Field
                className={className}
                as={MaterialSelect}
                name={name}
                label={label}
                errorString={<ErrorMessage name={name}  component={ComponentMsmErro}/>}
                >
                {itens.map(iten => (
                    <MenuItem key={iten.value} value={iten.value}>
                        {iten.label}
                    </MenuItem>
                ))}
            </Field>
        );
    }
    export default ComponentSelect;