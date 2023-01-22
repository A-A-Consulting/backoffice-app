
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Container, Box } from "@mui/material"

import { LOGIN, WELCOME_MESSAGE } from "./login.constants";


const LoginView = (
    props: any
) => {
    const {
        onChangeHandler,
        state,
        setState ,
        errors,
        handleSubmit,
        setFieldValue
    } = props;

    return (
        <Container className="login-containers">
            <Box>
                <h1>{WELCOME_MESSAGE}</h1>
            </Box>
            <Box>
                <TextField
                    id='email'
                    label='Email'
                    variant="outlined"
                    onChange={(event)=>onChangeHandler(
                        event.target.value,
                        "email",
                        state,
                        setState,
                        setFieldValue
                    )}
                    error={errors?.email}
                    helperText={errors?.email}
                />
                <TextField
                    id='password'
                    type={'password'}
                    label='Password'
                    variant="outlined"
                    onChange={(event)=>onChangeHandler(
                        event.target.value,
                        "password",
                        state,
                        setState,
                        setFieldValue
                    )}
                    error={errors?.password}
                    helperText={errors?.password}
                />
                <Button
                    onClick={()=>handleSubmit()}
                    variant="contained"
                >
                    {LOGIN}
                </Button>
            </Box>
        </Container>
    )
}

export { LoginView }