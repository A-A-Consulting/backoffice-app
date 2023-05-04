
export interface videoFormI {
  title: string | null;
  comments: string | null;
  url: string
}

export type videoCreatorViewProps = {
  onChangeHandler: Function;
  state: any;
  setState: Function;
  errors: any;
  handleSubmit: Function;
  setFieldValue: Function;
};