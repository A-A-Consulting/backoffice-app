import { useState } from "react";
import { Formik, Form } from "formik";

import { VideoFormView } from "./videoForm.view";
import { videoHandler, onChangeHandler } from "./videoForm.handlers";
import { videoSchema, videoValidator } from "./videoForm.validator";
import { Alert, AlertColor } from "@mui/material";

const alertSucces = {
  severity: 'success',
  message: 'The video was saved successfully!'
}

const alertError = {
  severity: 'error',
  message: 'Oops! something went wrong, try again!'
}

const VideoController = () => {
  const initial_values = {
    title: null,
    comments: null,
    url: null,
    isSubmitting: false,
  };
  const [state, setState] = useState(initial_values);
  const [isAlertShown, setIsAlertShown] = useState(false)
  const [alertProps, setAlertProps] = useState(alertSucces)

  const onCloseAlert = () => {
    setIsAlertShown(false)
  }

  return (
    <Formik
      initialValues={initial_values}
      onSubmit={async () => {
        try{
          const response = await videoHandler(state);
          setAlertProps(alertSucces);
          setIsAlertShown(true);
        }catch(error){
          console.error((error as Error).message)
          setAlertProps(alertError);
          setIsAlertShown(true);
        }
      }}
      validationSchema={videoSchema}
      // validate={async ()=> await videoValidator(state,setError)}
    >
      {({ values, handleSubmit, setFieldValue, errors }) => {
        // console.log("values", values);
        // console.log("state", state);
        // console.log("errors", errors);
        return (
          <>
            {isAlertShown&&(
              <Alert 
                severity={alertProps.severity as AlertColor}
                onClose={onCloseAlert}
              >
                {`${alertProps.message}`}
              </Alert>
            )}
            <form>
              <VideoFormView
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

export { VideoController };
