import { useState } from "react";
import { Formik } from "formik";

import { VideoFormView } from "./videoForm.view";
import { videoFormHandler, videoEditFormHandler, onChangeHandler } from "./videoForm.handlers";
import { videoSchema } from "./videoForm.validator";
import { Alert, AlertColor } from "@mui/material";
import { CREATE, EDIT } from "./videoForm.constants";

const alertSucces = {
  severity: "success",
  message: "The video was saved successfully!",
};

const alertError = {
  severity: "error",
  message: "Oops! something went wrong, try again!",
};

const VideoFormController = (props: any) => {
  const { action, content } = props;
  const initial_values = {
    title: content?.title ? content.title : null,
    comments: content?.comments ? content.comments : null,
    url: content?.url ? content.url : null,
    isSubmitting: false,
  };
  const [state, setState] = useState(initial_values);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertProps, setAlertProps] = useState(alertSucces);

  const onCloseAlert = () => {
    setIsAlertShown(false);
  };

  const handleSubmitForm = async () => {
    if(action === CREATE) {
      try {
        await videoFormHandler(state);
        setAlertProps(alertSucces);
        setIsAlertShown(true);
      } catch (error) {
        console.error((error as Error).message);
        setAlertProps(alertError);
        setIsAlertShown(true);
      } 
    }else{
      if(action === EDIT){
        try {
          await videoEditFormHandler(state);
          setAlertProps(alertSucces);
          setIsAlertShown(true);
        } catch (error) {
          console.error((error as Error).message);
          setAlertProps(alertError);
          setIsAlertShown(true);
        } 
      }
    }
  }

  return (
    <Formik
      initialValues={initial_values}
      onSubmit={handleSubmitForm}
      validationSchema={videoSchema}
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
              <VideoFormView
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

export { VideoFormController };
