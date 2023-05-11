import { useState, useContext } from "react";
import { Formik } from "formik";

import { LoginView } from "./login.view";
import { loginHandler, onChangeHandler } from "./login.handlers";
import { loginSchema } from "./login.validator";
import AuthContext from "../../context/authContext/auth.provider";
import { useNavigate } from "react-router";

const LoginController = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
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
        // const token = await loginHandler(state);
        // localStorage.setItem('accesToken', token)
      }}
      validationSchema={loginSchema}
    >
      {({ values, handleSubmit, setFieldValue, errors }) => {
        return (
          <>
            {/* <ResponsiveAppBar></ResponsiveAppBar> */}
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
