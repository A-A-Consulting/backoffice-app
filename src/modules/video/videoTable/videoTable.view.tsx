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
import { videoItem } from "../video.interface";

interface VideoTableViewPropsI {
  videoList: videoItem[];
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

export const VideoTableView = (props: VideoTableViewPropsI) => {
  const { videoList } = props;
  useEffect(() => {}, [videoList]);
  return (
    <>
      <h3>Tabla de Videos</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell>Fecha publicación</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videoList.map((video: videoItem) => (
              <TableRow key={video.id}>
                <TableCell>{video.title}</TableCell>
                <TableCell>
                  {new Date(video.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
