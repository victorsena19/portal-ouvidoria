import { TextField } from '@mui/material';
import ComponentMsmErro from 'componentes/ComponentMsmErro';
import { ErrorMessage, Field } from 'formik';

interface Props {
    name: string;
    className?: string;
    label: string;
    type: string;
    max?: string | number; 
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const ComponentText: React.FC<Props> = ({max, name, className, label, type, onBlur }: Props) => {

    return <Field
        className={className}
        max={max}
        as={TextField}
        name={name}
        label={label}
        helperText={<ErrorMessage name={name} component={ComponentMsmErro}/>}
        fullWidth
        onBlur={onBlur}
        type={type}
    />

}

export default ComponentText;

