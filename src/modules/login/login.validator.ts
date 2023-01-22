import * as yup from 'yup'

const passwordRegEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const loginSchema = yup.object().shape({
    email: yup.string().email("It must be a valid Email address").required("Email is a required field."),
    password: yup.string()
                // .matches(passwordRegEx, {message: "Password must have 8 characters length, containing numbers, letters, at least 1 cap letter"})
                .required("Password is a required field.")
})

const loginValidator = (
    state: any,
    setError: Function
) => {
    return loginSchema.validate(state).catch(error => {
        setError(error)
    });
}

export {
    loginValidator,
    loginSchema
}