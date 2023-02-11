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
    console.log('data del form', data)
    const response = await saveVideo(data);
    if (response) {
      return response
    } else {
      throw new Error('No db conect')
    }
  } catch (error) {
    console.error("🚀 ~ file: login.handlers.ts ~ videoHandler ~ error", error)
    throw new Error((error as Error).message)
  }
}