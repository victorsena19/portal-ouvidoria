import style from './InputPequeno.module.scss';

interface Props{
    label: string;
    htmlFor: string;
    type: string;
    id?: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    className: string;
}

export default function InputPequeno({label, htmlFor, type, id, value, placeholder, required, className}: Props){
    return(
    <div className={className}>
        <label htmlFor={htmlFor}>{label}</label>
        <input type={type} 
            id={id}
            value={value}
            placeholder={placeholder}
            required={required}/>
    </div>
    )
}