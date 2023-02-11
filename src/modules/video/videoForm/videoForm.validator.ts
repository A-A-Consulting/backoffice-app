import * as yup from 'yup'

const UrlYuotubeRegEx = new RegExp("^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$");


const videoSchema = yup.object().shape({
  title: yup.string().required("Title is a required field."),
  comments: yup.string().nullable(),
  url: yup.string().matches(
    UrlYuotubeRegEx,
    'Enter correct url!'
  ).required("Url website is a required field.")
})

const videoValidator = (
  state: any,
  setError: Function
) => {
  return videoSchema.validate(state).catch(error => {
    setError(error)
  });
}

export {
  videoValidator,
  videoSchema
}