import { useState } from "react";
import { Formik } from "formik";

import { SubscriptionFormView } from "./subscriptionForm.view";
import { subscriptionFormHandler, onChangeHandler } from "./subscriptionForm.handlers";
import { subscriptionSchema } from "./subscriptionForm.validator";
import { Alert, AlertColor } from "@mui/material";
import { alertSucces, alertError } from './subscriptionForm.constants';


const SubscriptionFormController = () => {
  const initial_values = {
    name: null,
    amount: null,
    description: null,
    isSubmitting: false,
  };
  const [state, setState] = useState(initial_values);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertProps, setAlertProps] = useState(alertSucces);

  const onCloseAlert = () => {
    setIsAlertShown(false);
  };

  return (
    <Formik
      initialValues={initial_values}
      onSubmit={async () => {
        try {
          const response = await subscriptionFormHandler(state);
          setAlertProps(alertSucces);
          setIsAlertShown(true);
        } catch (error) {
          console.error((error as Error).message);
          setAlertProps(alertError);
          setIsAlertShown(true);
        }
      }}
      validationSchema={subscriptionSchema}
      // validate={async ()=> await videoValidator(state,setError)}
    >
      {({ values, handleSubmit, setFieldValue, errors }) => {
        return (
          <>
            {isAlertShown && (
              <Alert
                severity={alertProps.severity as AlertColor}
                onClose={onCloseAlert}
              >
                {`${alertProps.message}`}
              </Alert>
            )}
            <form>
              <SubscriptionFormView
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

export { SubscriptionFormController };
