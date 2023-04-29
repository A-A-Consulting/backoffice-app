import { getAllVideos } from "../../external-services/external-services";
import { VideoLandingView } from "./VideoLandingView";
import { useState, useEffect, useCallback } from "react";

export const VideoLandingController = () => {
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const requestVideos = useCallback(async () => {
    const fetchedVideos = await getAllVideos();
    if (fetchedVideos.length) {
      setVideoList(fetchedVideos);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    requestVideos();
  }, []);

  useEffect(() => {
    if (videoList.length) {
      setIsLoading(false);
    }
  }, [videoList, isLoading]);

  return (
    <>
      {videoList.length === 0 ? (
        isLoading ? (
          <div>Cargando...</div>
        ) : (
          <div>No hay videos...</div>
        )
      ) : null}
      <VideoLandingView videoList={videoList} />
    </>
  );
};
