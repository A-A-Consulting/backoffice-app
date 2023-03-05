import { saveVideo } from "../../external-services/external-services"; 

export const onChangeHandler = (
  value: string,
  inputName: string,
  state: any,
  setState: Function,
  setFieldValue: Function
) => {
  setFieldValue([inputName], value);
  setState({ ...state, [inputName]: value })
}


export const videoFormHandler = async (data: any) => {
  try {
    const response = await saveVideo(data);
    if (response) {
      return response
    } else {
      throw new Error('Could not save video')
    }
  } catch (error) {
    console.error("🚀 ~ file: videoForm.handlers.ts:25 ~ videoFormHandler ~ error:", error)
    throw new Error((error as Error).message)
  }
}