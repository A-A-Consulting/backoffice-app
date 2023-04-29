import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { VideoFormController } from "../videoForm/videoForm.controller";
import { videoItem } from "../video.interface";
import { VideoTableView } from "../videoTable/videoTable.view";
import { useState } from "react";

interface VideoLandingViewProps {
  videoList: videoItem[];
}

export const VideoLandingView = (props: VideoLandingViewProps) => {
  const { videoList } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <h1>Tablero de Videos</h1>
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
          Añadir Video
        </Button>
      </Box>
      <VideoTableView videoList={videoList} />

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
        <VideoFormController />
      </Modal>
    </Container>
  );
};
