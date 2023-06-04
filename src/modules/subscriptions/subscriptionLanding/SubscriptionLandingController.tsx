import { getAllSubscriptions } from "../../external-services/external-services";
import { SubscriptionLandingView } from "./SubscriptionLandingView";
import { useState, useEffect, useCallback } from "react";

export const SubscriptionLandingController = () => {
  const [subscriptionList, setSubscriptionList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const requestSubscription = useCallback(async () => {
    const fetchedSubscriptions = await getAllSubscriptions();
    if (fetchedSubscriptions?.length) {
      setSubscriptionList(fetchedSubscriptions);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    requestSubscription();
  }, [requestSubscription]);

  useEffect(() => {
    if (subscriptionList?.length) {
      setIsLoading(false);
    }
  }, [subscriptionList, isLoading]);

  return (
    <>
      {subscriptionList?.length === 0 ? (
        isLoading ? (
          <div>Cargando...</div>
        ) : (
          <div>No hay subscripciones...</div>
        )
      ) : null}
      <SubscriptionLandingView subscriptionList={subscriptionList} />
    </>
  );
};
