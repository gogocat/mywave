import { useField } from 'formik';
import TextField from '@mui/material/TextField';
import { IPlanObject } from 'interfaces';

interface ITextInputFieldProps {
    label?: string,
    placeholder?: string,
    name: string,
    id?: string,
    margin?: string,
    fullWidth?: boolean,
    maxLength?: number,
    textArea?: boolean,
    multiline?: boolean,
    [key: string]: any
}

function TextInputField(props: ITextInputFieldProps) {
    const { 
        label,
        id = '',
        maxLength = 120,
        fullWidth = true,
        margin = 'normal',
        helperText,
        ...restProps
    } = props;

    const [field, meta] = useField(restProps);

    const mergedCommonProps = {
        id: id || props.name,
        name: props.name || '',
        fullWidth: !!fullWidth,
        label,
        margin,
    } as IPlanObject;

    let helperTextContent = helperText;

    if (meta.touched && meta.error) {
        helperTextContent = meta.error;
    }

    return (
        <TextField
            {...mergedCommonProps}
            {...restProps}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={meta.touched && Boolean(meta.error)}
            helperText={helperTextContent}
            inputProps={{ maxLength, }}
        />
    );
}

export default TextInputField;
