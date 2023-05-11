import { useEffect, useState } from "react";
import { Formik } from "formik";
import Swal from 'sweetalert2';

import { SubscriptionFormView } from "./subscriptionForm.view";
import { subscriptionFormHandler, onChangeHandler } from "./subscriptionForm.handlers";
import { subscriptionSchema } from "./subscriptionForm.validator";
import { Alert, AlertColor } from "@mui/material";
import { alertSucces, alertError, CREATE, DELETE } from './subscriptionForm.constants';


const SubscriptionFormController = (props: any) => {
  const { action, content } = props
  const initial_values = {
    id: content.id ? content.id : null,
    name: content?.name ? content.name : null,
    amount: content?.amount ? content.amount : null,
    description: content?.description ? content.description : null,
    isSubmitting: false,
  };
  const [state, setState] = useState(initial_values);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertProps, setAlertProps] = useState(alertSucces);

  useEffect(() => {
    if (content) {
      setState({
        id: content.id,
        name: content?.name,
        amount: content?.amount,
        description: content?.description,
        isSubmitting: false,
      });
    }
  }, []);

  const onCloseAlert = () => {
    setIsAlertShown(false);
  };

  const handleSubmitForm = async () => {
    if(action === CREATE) {
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
  }

  return (
    <Formik
      initialValues={initial_values}
      onSubmit={handleSubmitForm}
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
                action={action}
              />
            </form>
          </>
        );
      }}
    </Formik>
  );
};

export { SubscriptionFormController };
