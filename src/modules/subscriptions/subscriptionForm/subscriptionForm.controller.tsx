import { useEffect, useState } from "react";
import { Formik } from "formik";

import { SubscriptionFormView } from "./subscriptionForm.view";
import {
  subscriptionFormHandler,
  onChangeHandler,
} from "./subscriptionForm.handlers";
import { subscriptionSchema } from "./subscriptionForm.validator";
import { Alert, AlertColor } from "@mui/material";
import { alertSucces, alertError, CREATE } from "./subscriptionForm.constants";
import { subscriptionFormPropsI } from "../subscription.interface";

const SubscriptionFormController = (props: subscriptionFormPropsI) => {
  const { action, content } = props;
  const initialValues = {
    id: content?.id || null,
    name: content?.name || null,
    amount: content?.amount || null,
    description: content?.description || null,
    url: content?.url || null,
    isSubmitting: false,
  };
  const [state, setState] = useState(initialValues);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertProps, setAlertProps] = useState(alertSucces);

  useEffect(() => {
    if (content) {
      setState({
        id: content?.id as string,
        name: content?.name,
        amount: content?.amount,
        description: content?.description,
        url: content?.url,
        isSubmitting: false,
      });
    }
  }, []);

  const onCloseAlert = () => {
    setIsAlertShown(false);
  };

  const handleSubmitForm = async () => {
    if (action === CREATE) {
      try {
        await subscriptionFormHandler(state);
        setAlertProps(alertSucces);
        setIsAlertShown(true);
      } catch (error) {
        console.error((error as Error).message);
        setAlertProps(alertError);
        setIsAlertShown(true);
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={subscriptionSchema}
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
                  action={action}
                />
              </form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export { SubscriptionFormController };
