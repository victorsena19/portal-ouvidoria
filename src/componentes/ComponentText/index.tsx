import { TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

interface Props {
    name: string;
    className?: string;
    label: string;
    type: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const ComponentText: React.FC<Props> = ({ name, className, label, type, onBlur }: Props) => {

    return <Field
        className={className}
        as={TextField}
        name={name}
        label={label}
        helperText={<ErrorMessage name={name} />}
        fullWidth
        onBlur={onBlur}
        type={type}
    />

}

export default ComponentText;

