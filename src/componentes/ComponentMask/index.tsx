import MaskInput from 'react-input-mask';
import { ErrorMessage, Field, useField } from "formik";
import style from './ComponentMask.module.scss';
import { FormHelperText } from '@mui/material';
import React, { useEffect, useRef } from 'react';

interface ComponentMaskPersonalizadoProps {
    label?: string;
    htmlFor?: string;
    name: string;
    id: string;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    mask: string | (string | RegExp)[];
    errorString: string;
    estilo?: React.CSSProperties;
}

interface ComponentMaskProps {
    name: string;
    label: string;
    id: string;
    className?: string;
    mask: string | (string | RegExp)[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    estilo?: React.CSSProperties;
}

const ComponentMaskPersonalizado = ({ estilo, onBlur, htmlFor, mask, label, name, id, errorString }: ComponentMaskPersonalizadoProps) => {


    const [field, meta, helpers] = useField(name);
    const mudanca = (event: { target: { value: string } }) => {
        helpers.setValue(event.target.value);
    };

    return (

        <div style={estilo} className={style.container}>
            <div className={style.container}>
                <MaskInput
                    mask={mask}
                    name={name}
                    id={id}
                    value={field.value}
                    onBlur={onBlur}
                    onChange={mudanca}
                />
                <label className={style.label} htmlFor={htmlFor} id={id}>
                    <div className={style.text}>{label}</div>
                </label>
            </div>
            <FormHelperText className={style.msmerro}>{errorString}</FormHelperText>
        </div>

    )
}


const ComponentMask = ({ onBlur, onChange, estilo, value, className, label, name, mask }: ComponentMaskProps) => {

    return (

        <Field
            className={className}
            mask={mask}
            id={name}
            label={label}
            name={name}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            estilo={estilo}
            errorString={<ErrorMessage name={name} />}
            as={ComponentMaskPersonalizado}
        />

    );
}

export default ComponentMask;
