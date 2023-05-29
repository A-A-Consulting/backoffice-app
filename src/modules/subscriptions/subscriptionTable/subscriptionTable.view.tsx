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

  const handleDelete = (content: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          deleteSubscriptionService(content).then((response) => {
            if (response) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      })
      .catch((error) => {
        console.error("guardaaaaaaaaaaaaa");
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
              <TableCell>Nombre del plan</TableCell>
              <TableCell>Costo mensual</TableCell>
              <TableCell>Acciones</TableCell>
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
                <IconButton onClick={() => handleDelete(subscription)}>
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
