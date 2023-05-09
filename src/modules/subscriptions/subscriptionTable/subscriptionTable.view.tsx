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

interface SubscriptionTableViewPropsI {
  subscriptionList: subscriptionItem[];
}


const handleClick = (id: string) => {
  alert('hace falta otro modal para eliminar?')
};

export const SubscriptionTableView = (props: SubscriptionTableViewPropsI) => {
  const { subscriptionList } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {}, [subscriptionList]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
              <TableCell>Descripcion</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptionList.map((subscription: subscriptionItem) => (
              <TableRow key={subscription.id}>
                <TableCell>{subscription.name}</TableCell>
                <TableCell>{subscription.amount}</TableCell>
                <TableCell>{subscription.description}</TableCell>
                <IconButton onClick={() => alert('necesitamos otro modal?')}>
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton onClick={() => setIsModalOpen(true)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleClick(subscription.id)}>
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
          onClose={(event: {}, reason: "backdropClick" | "escapeKeyDown") => handleCloseModal()}
        >
          {<SubscriptionFormController />}
        </Modal>
      </TableContainer>
    </>
  );
};
