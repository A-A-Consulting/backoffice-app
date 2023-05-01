import * as yup from 'yup'

// const UrlYuotubeRegEx = new RegExp("^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$");


const subscriptionSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  amount: yup.number().positive().required("Amount is a required field."),
  description: yup.string().required("Description is a required field.")
})

const subscriptionValidator = (
  state: any,
  setError: Function
) => {
  return subscriptionSchema.validate(state).catch(error => {
    setError(error)
  });
}

export {
  subscriptionValidator,
  subscriptionSchema
}