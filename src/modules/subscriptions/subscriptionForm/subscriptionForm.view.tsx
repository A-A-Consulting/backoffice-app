import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Container, Box } from "@mui/material";

import {
  FORM_TITLE_MESSAGE,
  INSPECT,
  SAVE_SUBSCRIPTION,
} from "./subscriptionForm.constants";
import { subscriptionCreatorViewProps } from "./subscriptionForm.interface";

const SubscriptionFormView = ({
  onChangeHandler,
  state,
  setState,
  errors,
  handleSubmit,
  setFieldValue,
  action,
}: subscriptionCreatorViewProps) => {
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
            <h1>
              {
                //@ts-ignore
                FORM_TITLE_MESSAGE[`${action}`]
              }
            </h1>
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
            defaultValue={state.title}
            error={errors?.title}
            helperText={errors?.title}
            margin={"normal"}
            disabled={action === "inspect"}
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
            defaultValue={state.amount}
            error={errors?.amount}
            helperText={errors?.amount}
            margin={"normal"}
            disabled={action === "inspect"}
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
            defaultValue={state?.description}
            error={errors?.description}
            helperText={errors?.description}
            margin={"normal"}
            disabled={action === "inspect"}
          />
          <TextField
            id="url"
            label="Url"
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
            defaultValue={state?.url}
            error={errors?.url}
            helperText={errors?.url}
            margin={"normal"}
            disabled={action === "inspect"}
          />
          <Button
            hidden={action === INSPECT ? true : false}
            onClick={() => handleSubmit()}
            variant="contained"
            sx={{
              marginTop: "15px",
              width: "50%",
              display: action === "inspect" ? "none" : "true",
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
