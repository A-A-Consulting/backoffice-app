import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Container, Box } from "@mui/material";

import { SAVE_VIDEO, WELCOME_MESSAGE } from "./videoForm.constants";
import { videoCreatorViewProps } from "./videoForm.interface";

const VideoFormView = ({
  onChangeHandler,
  state,
  setState,
  errors,
  handleSubmit,
  setFieldValue,
}: videoCreatorViewProps) => {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
          }}
        >
          <Box
            sx={{
              width: "80%",
              textAlign: "center",
            }}
          >
            <h1>{WELCOME_MESSAGE}</h1>
          </Box>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            onChange={(event) =>
              onChangeHandler(
                event.target.value,
                "title",
                state,
                setState,
                setFieldValue
              )
            }
            error={errors?.title}
            helperText={errors?.title}
            margin={"normal"}
          />
          <TextField
            id="url"
            type={"url"}
            label="Url web site"
            variant="outlined"
            onChange={(event) =>
              onChangeHandler(
                event.target.value,
                "url",
                state,
                setState,
                setFieldValue
              )
            }
            error={errors?.url}
            helperText={errors?.url}
            margin={"normal"}
          />
          <TextField
            id="comments"
            label="Comments"
            variant="outlined"
            onChange={(event) =>
              onChangeHandler(
                event.target.value,
                "comments",
                state,
                setState,
                setFieldValue
              )
            }
            error={errors?.comments}
            helperText={errors?.comments}
            margin={"normal"}
          />
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            sx={{
              marginTop: "15px",
              width: "50%",
            }}
          >
            {SAVE_VIDEO}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export { VideoFormView };
