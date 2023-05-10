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
import { DELETE, EDIT, INSPECT, CREATE } from "../videoForm/videoForm.constants";

interface VideoTableViewPropsI {
  videoList: videoItem[];
}


// const emptyContent = {
//   id: null,
//   title: null,
//   comments: null,
//   url: null,
//   status: null,
//   createdAt: null,
//   updatedAt: null,
//   deletedAt: null
// }

export const VideoTableView = (props: VideoTableViewPropsI) => {
  const { videoList } = props;
  const [isAction, setAction] = useState(CREATE);
  const [isContent, setIsContent] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {}, [videoList]);

  const handleClick = (content: any, action: string) => {
    setAction(action);
    setIsContent(content);
    setIsModalOpen(true);
  };

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
                <IconButton onClick={() => handleClick(video, INSPECT)}>
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton onClick={() => handleClick(video, EDIT)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleClick(video, DELETE)}>
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
          {<VideoFormController action={isAction} content={isContent} />}
        </Modal>
      </TableContainer>
    </>
  );
};
