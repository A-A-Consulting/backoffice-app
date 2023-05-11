import { Box, Button, Container, Modal } from "@mui/material";
import { SubscriptionFormController } from "../subscriptionForm/subscriptionForm.controller";
import { subscriptionItem } from "../subscription.interface";
import { SubscriptionTableView } from "../subscriptionTable/subscriptionTable.view";
import { useState } from "react";

interface SubscriptionLandingViewProps {
  subscriptionList: subscriptionItem[];
}

export const SubscriptionLandingView = (
  props: SubscriptionLandingViewProps
) => {
  const { subscriptionList } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <h1>Tablero de subscripciones</h1>
      <Box>
        <Button
          color="primary"
          onClick={() => {
            setIsModalOpen(true);
          }}
          sx={{
            border: "1px solid gray",
            fontWeight: "bolder",
          }}
        >
          Añadir Subscripcion
        </Button>
      </Box>
      <SubscriptionTableView subscriptionList={subscriptionList} />

      <Modal
        sx={{
          backgroundColor: "grey",
          zIndex: 1,
          marginTop: "10vh",
        }}
        component={Container}
        open={isModalOpen}
        onClose={handleCloseModal}
      >
        <SubscriptionFormController />
      </Modal>
    </Container>
  );
};
