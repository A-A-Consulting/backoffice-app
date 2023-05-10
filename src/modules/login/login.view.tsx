import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Container, Box } from "@mui/material";
// import { loginManager } from "../external-services/firebase/interceptor";

import { LOGIN, WELCOME_MESSAGE } from "./login.constants";

const LoginView = (props: any) => {
  const {
    onChangeHandler,
    state,
    setState,
    errors,
    handleSubmit,
    setFieldValue,
  } = props;

  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        padding: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
          }}
        >
          <Box
            sx={{
              width: "80%",
              textAlign: "center",
            }}
          >
            <h1>{WELCOME_MESSAGE}</h1>
          </Box>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={(event) =>
              onChangeHandler(
                event.target.value,
                "email",
                state,
                setState,
                setFieldValue
              )
            }
            error={errors?.email}
            helperText={errors?.email}
            margin={"normal"}
          />
          <TextField
            id="password"
            type={"password"}
            label="Password"
            variant="outlined"
            onChange={(event) =>
              onChangeHandler(
                event.target.value,
                "password",
                state,
                setState,
                setFieldValue
              )
            }
            error={errors?.password}
            helperText={errors?.password}
            margin={"normal"}
          />
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            sx={{
              marginTop: "15px",
              width: "50%",
            }}
          >
            {LOGIN}
          </Button>
          {/* <Button
            onClick={async () => loginManager()}
            variant="contained"
            sx={{
              marginTop: "15px",
              width: "50%",
            }}
          >
            {LOGIN_GOOGLE}
          </Button> */}
        </Box>
      </Box>
    </Container>
  );
};

export { LoginView };
