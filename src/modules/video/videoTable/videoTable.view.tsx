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
import { videoItem } from "../video.interface";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { EDIT, INSPECT } from "../videoForm/videoForm.constants";
import Swal from "sweetalert2";
import { deleteVideoService } from "../videoForm/videoForm.handlers";

interface VideoTableViewPropsI {
  videoList: videoItem[];
  setIsModalOpen: Function;
  setSelectedVideo: Function;
  setAction: Function;
}

export const VideoTableView = (props: VideoTableViewPropsI) => {
  const { videoList, setAction, setSelectedVideo, setIsModalOpen } = props;

  useEffect(() => {}, [videoList]);

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
          deleteVideoService(content).then((response) => {
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
    setAction(action);
    setSelectedVideo(content);
    setIsModalOpen(true);
  };

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
              <TableRow key={video?.id}>
                <TableCell>{video.title}</TableCell>
                <TableCell>
                  {new Date(video.createdAt).toLocaleDateString()}
                </TableCell>
                <IconButton onClick={() => handleClick(video, INSPECT)}>
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton onClick={() => handleClick(video, EDIT)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(video)}>
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
