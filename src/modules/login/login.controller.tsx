import { useState } from "react";
import { Formik, Form } from "formik";

import { LoginView } from "./login.view";
import { loginHandler , onChangeHandler } from "./login.handlers";
import { loginSchema, loginValidator } from "./login.validator";

const LoginController = () => {
  const initial_values = {
    email: null,
    password: null,
    isSubmitting: false,
  };
  const [state, setState] = useState(initial_values);
  const [error, setError] = useState({ email: null, password: null });

  return (
    <Formik
      initialValues={initial_values}
      onSubmit={async () => {
        
        await loginHandler(state)
      }}
      validationSchema={loginSchema}
      // validate={async ()=> await loginValidator(state,setError)}
    >
      {({ values, handleSubmit, setFieldValue, errors }) => {
        console.log("values", values);
        console.log("state", state);
        console.log("errors", errors);
        return (
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
        );
      }}
    </Formik>
  );
};

export { LoginController };
