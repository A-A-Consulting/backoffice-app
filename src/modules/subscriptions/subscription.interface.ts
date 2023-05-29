export interface subscriptionItem {
  id?: string;
  name: string;
  amount: string;
  description: string;
  url: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface subscriptionFormPropsI {
  action: string;
  content: subscriptionItem;
}
