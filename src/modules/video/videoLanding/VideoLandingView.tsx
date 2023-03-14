import { Container, Typography } from "@mui/material"
import { VideoController } from '../videoForm/videoForm.controller';


export const VideoLandingView = () => {

    return (
        <Container>
            <Typography
                component={'h1'}
            >
                Administración de videos
            </Typography>
            <VideoController />
        </Container>
    )
}