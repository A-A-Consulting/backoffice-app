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
import { videoItem } from "../video.interface";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { VideoFormController } from "../videoForm/videoForm.controller";

interface VideoTableViewPropsI {
  videoList: videoItem[];
}


const handleClick = (id: string) => {
  alert('hace falta otro modal para eliminar?')
};

export const VideoTableView = (props: VideoTableViewPropsI) => {
  const { videoList } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {}, [videoList]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
              <TableRow key={video.id}>
                <TableCell>{video.title}</TableCell>
                <TableCell>
                  {new Date(video.createdAt).toLocaleDateString()}
                </TableCell>
                <IconButton onClick={() => alert('necesitamos otro modal?')}>
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton onClick={() => setIsModalOpen(true)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleClick(video.id)}>
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
          {<VideoFormController />}
        </Modal>
      </TableContainer>
    </>
  );
};
