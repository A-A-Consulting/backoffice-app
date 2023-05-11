import {
  saveVideo,
  editVideo,
  deleteVideo,
} from "../../external-services/external-services";

export const onChangeHandler = (
  value: string,
  inputName: string,
  state: any,
  setState: Function,
  setFieldValue: Function
) => {
  setFieldValue([inputName], value);
  setState({ ...state, [inputName]: value });
};

export const videoFormHandler = async (data: any) => {
  try {
    const response = await saveVideo(data);
    if (response) {
      return response;
    } else {
      throw new Error("Could not save video");
    }
  } catch (error) {
    console.error(
      "🚀 ~ file: videoForm.handlers.ts:25 ~ videoFormHandler ~ error:",
      error
    );
    throw new Error((error as Error).message);
  }
};

export const videoEditFormHandler = async (data: any) => {
  try {
    const response = await editVideo(data);
    if (response) {
      return response;
    } else {
      throw new Error("Could not save edit video");
    }
  } catch (error) {
    console.error(
      "🚀 ~ file: videoEditForm.handlers.ts:38 ~ videoEditFormHandler ~ error:",
      error
    );
    throw new Error((error as Error).message);
  }
};

export const deleteVideoService = async (data: any) => {
  try {
    const response = await deleteVideo(data);
    if (response) {
      return response;
    } else {
      throw new Error("Could not delete video");
    }
  } catch (error) {
    console.error(
      "🚀 ~ file: deleteVideoService.handlers.ts:52 ~ deleteVideoService ~ error:",
      error
    );
    throw new Error((error as Error).message);
  }
};
