import { useState, useEffect } from "react";
import { Formik } from "formik";

import { VideoFormView } from "./videoForm.view";
import {
  videoFormHandler,
  videoEditFormHandler,
  onChangeHandler,
} from "./videoForm.handlers";
import { videoSchema } from "./videoForm.validator";
import { Alert, AlertColor } from "@mui/material";
import { CREATE, EDIT, alertSucces, alertError } from "./videoForm.constants";

const VideoFormController = (props: any) => {
  const { action, content } = props;

  const initial_values = {
    id: content?.id ? content?.id : null,
    title: content.title ? content.title : null,
    comments: content.comments ? content.comments : null,
    url: content.url ? content.url : null,
    isSubmitting: false,
  };
  const [state, setState] = useState(initial_values);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertProps, setAlertProps] = useState(alertSucces);

  useEffect(() => {
    if (content) {
      setState({
        id: content?.id,
        title: content.title,
        comments: content.comments,
        url: content.url,
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
        await videoFormHandler(state);
        setAlertProps(alertSucces);
        setIsAlertShown(true);
      } catch (error) {
        console.error((error as Error).message);
        setAlertProps(alertError);
        setIsAlertShown(true);
      }
    } else {
      if (action === EDIT) {
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
  };

  return (
    <Formik
      initialValues={state}
      onSubmit={handleSubmitForm}
      validationSchema={videoSchema}
      // validate={async ()=> await videoValidator(state,setError)}
    >
      {({ values, handleSubmit, setFieldValue, errors }) => {
        //  console.log("LOS VALUES EN EL FORM ->>>>>>>>>", values);
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
