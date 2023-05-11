import { useState, useEffect } from "react";
import { Box, Button, Container, Modal } from "@mui/material";
import { VideoFormController } from "../videoForm/videoForm.controller";
import { videoItem } from "../video.interface";
import { VideoTableView } from "../videoTable/videoTable.view";
import { CREATE } from "../videoForm/videoForm.constants";

interface VideoLandingViewProps {
  videoList: videoItem[];
}

export const VideoLandingView = (props: VideoLandingViewProps) => {
  const { videoList } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState(CREATE);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {}, [action]);

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
      <VideoTableView
        videoList={videoList}
        setIsModalOpen={setIsModalOpen}
        setSelectedVideo={setSelectedVideo}
        setAction={setAction}
      />

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
        <VideoFormController action={action} content={selectedVideo} />
      </Modal>
    </Container>
  );
};
