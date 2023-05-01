import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Container, Box } from "@mui/material";

import { SAVE_SUBSCRIPTION, WELCOME_MESSAGE } from "./subscriptionForm.constants";
import { videoCreatorViewProps } from "./subscriptionForm.interface";

const SubscriptionFormView = ({
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
            id="name"
            label="Name"
            variant="outlined"
            onChange={(event) =>
              onChangeHandler(
                event.target.value,
                "name",
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
            id="amount"
            type={"number"}
            label="amount"
            variant="outlined"
            onChange={(event) =>
              onChangeHandler(
                event.target.value,
                "amount",
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
            id="description"
            label="Description"
            variant="outlined"
            onChange={(event) =>
              onChangeHandler(
                event.target.value,
                "description",
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
            {SAVE_SUBSCRIPTION}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export { SubscriptionFormView };
