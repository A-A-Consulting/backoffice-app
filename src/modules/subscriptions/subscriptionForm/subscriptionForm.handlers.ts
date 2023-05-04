import { saveSubscription } from "../../external-services/external-services"; 

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


export const subscriptionFormHandler = async (data: any) => {
  try {
    const response = await saveSubscription(data);
    if (response) {
      return response
    } else {
      throw new Error('Could not save subscription')
    }
  } catch (error) {
    console.error("🚀 ~ file: subscriptionForm.handlers.ts:25 ~ subscriptionFormHandler ~ error:", error)
    throw new Error((error as Error).message)
  }
}