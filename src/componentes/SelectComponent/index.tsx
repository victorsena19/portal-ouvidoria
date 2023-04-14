import style from './SelectComponent.module.scss';

interface Props{
    label: string;
    value: string;
    options: {label:string; value: string}[];
}

export default function SelectComponent({label, value, options}:Props){
    return(
        <div className={style.select}>
            <label>{label}</label>
            <select value={value}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}