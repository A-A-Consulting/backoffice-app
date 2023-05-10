import { useState } from "react";
import { Formik } from "formik";
import Swal from 'sweetalert2';

import { SubscriptionFormView } from "./subscriptionForm.view";
import { subscriptionFormHandler, subscriptionDeleteFormHandler, onChangeHandler } from "./subscriptionForm.handlers";
import { subscriptionSchema } from "./subscriptionForm.validator";
import { Alert, AlertColor } from "@mui/material";
import { alertSucces, alertError, EDIT, CREATE, DELETE } from './subscriptionForm.constants';


const SubscriptionFormController = (props: any) => {
  const { action, content } = props
  const initial_values = {
    name: content?.name ? content.name : null,
    amount: content?.amount ? content.amount : null,
    description: content?.description ? content.description : null,
    isSubmitting: false,
  };
  const [state, setState] = useState(initial_values);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertProps, setAlertProps] = useState(alertSucces);

  const onCloseAlert = () => {
    setIsAlertShown(false);
  };

  const handleSubmitForm = async () => {
    if(action === DELETE){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          subscriptionDeleteFormHandler(state)
          .then((response) => {
              if(response){
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            }
          )
        }
      })
    }

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
