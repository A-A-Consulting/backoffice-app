import { useEffect } from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import { subscriptionItem } from "../subscription.interface";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteSubscriptionService } from "../subscriptionForm/subscriptionForm.handlers";
import { INSPECT } from "../subscriptionForm/subscriptionForm.constants";

interface SubscriptionTableViewPropsI {
  subscriptionList: subscriptionItem[];
  setSelectedSubscription: Function;
  setIsModalOpen: Function;
  setAction: Function;
}

export const SubscriptionTableView = (props: SubscriptionTableViewPropsI) => {
  const {
    subscriptionList,
    setAction,
    setSelectedSubscription,
    setIsModalOpen,
  } = props;

  useEffect(() => {}, [subscriptionList]);

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Estás Seguro?",
      text: "No se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, seguro!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          deleteSubscriptionService(id)
            .then((response) => {
              if (response) {
                Swal.fire(
                  "Eliminado!",
                  "La subscripcion se ha eliminado.",
                  "success"
                );
              }
            })
            .catch((error) => {
              Swal.fire({
                title: "error",
                text: `${(error as Error).message}`,
                icon: "error",
                showCancelButton: false,
              });
            });
        }
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  };

  const handleClick = (content: any, action: string) => {
    setSelectedSubscription(content);
    setAction(action);
    setIsModalOpen(true);
  };

  return (
    <>
      <h3>Tabla de Subscripciones</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight: "bold" }}>
                  Nombre del plan
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "bold" }}>
                  Costo mensual
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "bold" }}>Acciones</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptionList.map((subscription: subscriptionItem) => (
              <TableRow key={subscription?.id}>
                <TableCell>{subscription.name}</TableCell>
                <TableCell>{subscription.amount}</TableCell>
                <TableCell>{subscription.description}</TableCell>
                <IconButton onClick={() => handleClick(subscription, INSPECT)}>
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(subscription?.id)}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
