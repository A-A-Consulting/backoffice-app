import { loging } from '../external-services/external-services'

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


export const loginHandler = async (data: any) => {
  try {
    const response = await loging(data)
    return response
  } catch (error) {
    console.log("🚀 ~ file: login.handlers.ts:20 ~ handleSubmit ~ error", error)

  }
}