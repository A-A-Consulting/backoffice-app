import { useState } from "react";
import { Formik } from "formik";

import { LoginView } from "./login.view";
import { loginHandler, onChangeHandler } from "./login.handlers";
import { loginSchema } from "./login.validator";
import ResponsiveAppBar from "../home/navbar.view";

const LoginController = () => {
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
        const token = await loginHandler(state);
        localStorage.setItem('accesToken', token)
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
