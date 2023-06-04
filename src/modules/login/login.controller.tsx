import { useState, useContext } from "react";
import { Formik } from "formik";

import { LoginView } from "./login.view";
import { onChangeHandler } from "./login.handlers";
import { loginSchema } from "./login.validator";
import AuthContext from "../../context/authContext/auth.provider";

const LoginController = () => {
  const { loginUser } = useContext(AuthContext);
  const initial_values = {
    email: null,
    password: null,
    isSubmitting: false,
  };
  const [state, setState] = useState(initial_values);

  return (
    <Formik
      initialValues={initial_values}
      onSubmit={async () => {
        try {
          if (state.email && state.password) {
            await loginUser(state.email, state.password);
          }
        } catch (error) {}
      }}
      validationSchema={loginSchema}
    >
      {({ values, handleSubmit, setFieldValue, errors }) => {
        return (
          <>
            <form>
              <LoginView
                onChangeHandler={onChangeHandler}
                state={state}
                setState={setState}
                errors={errors}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
              />
            </form>
          </>
        );
      }}
    </Formik>
  );
};

export { LoginController };
