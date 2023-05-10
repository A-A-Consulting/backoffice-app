import { useEffect, useState } from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  IconButton,
  Modal,
} from "@mui/material";
import { subscriptionItem } from "../subscription.interface";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { SubscriptionFormController } from "../subscriptionForm/subscriptionForm.controller";
import { CREATE, DELETE, EDIT, INSPECT } from "../subscriptionForm/subscriptionForm.constants";

interface SubscriptionTableViewPropsI {
  subscriptionList: subscriptionItem[];
}

export const SubscriptionTableView = (props: SubscriptionTableViewPropsI) => {
  const { subscriptionList } = props;
  const [isAction, setAction] = useState(CREATE);
  const [isContent, setIsContent] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {}, [subscriptionList]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (content: any, action: string) => {
    setAction(action);
    setIsContent(content);
    setIsModalOpen(true);
  };

  return (
    <>
      <h3>Tabla de Subscripciones</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre del plan</TableCell>
              <TableCell>Costo mensual</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptionList.map((subscription: subscriptionItem) => (
              <TableRow key={subscription.id}>
                <TableCell>{subscription.name}</TableCell>
                <TableCell>{subscription.amount}</TableCell>
                <TableCell>{subscription.description}</TableCell>
                <IconButton onClick={() => handleClick(subscription, INSPECT)}>
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton onClick={() => handleClick(subscription, DELETE)}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal
          sx={{
            backgroundColor: "grey",
            zIndex: 1,
            marginTop: "10vh",
          }}
          component={TableContainer}
          open={isModalOpen}
          onClose={handleCloseModal}
        >
          {<SubscriptionFormController action={isAction} content={isContent} />}
        </Modal>
      </TableContainer>
    </>
  );
};
