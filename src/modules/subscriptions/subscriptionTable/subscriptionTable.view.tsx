import { useEffect } from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";
import { subscriptionItem } from "../subscription.interface";

interface SubscriptionTableViewPropsI {
  subscriptionList: subscriptionItem[];
}

// const gridHeader = [
//   {
//     field: "titulo",
//     headerName: "Título",
//     width: 150,
//     sortable: true,
//   },
//   {
//     field: "createdAt",
//     headerName: "Fecha Publicación",
//     width: 60,
//     sortable: true,
//   },
//   {
//     field: "action",
//     headerName: "Acciones",
//     sortable: false,
//     width: 120,
//   },
// ];

export const SubscriptionTableView = (props: SubscriptionTableViewPropsI) => {
  const { subscriptionList } = props;
  useEffect(() => {}, [subscriptionList]);
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
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptionList.map((subscription: subscriptionItem) => (
              <TableRow key={subscription.id}>
                <TableCell>{subscription.name}</TableCell>
                <TableCell>
                  {new Date(subscription.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
