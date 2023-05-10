
export interface subscriptionFormI {
  name: string | null;
  amount: number | null;
  description: string
}

export type subscriptionCreatorViewProps = {
  onChangeHandler: Function;
  state: any;
  setState: Function;
  errors: any;
  handleSubmit: Function;
  setFieldValue: Function;
  action: string
};