

export const onChangeHandler = (
    value: string,
    inputName: string,
    state: any,
    setState: Function,
    setFieldValue: Function
) => {
    setFieldValue([inputName], value);
    setState({ ...state, [inputName]: value})
}

