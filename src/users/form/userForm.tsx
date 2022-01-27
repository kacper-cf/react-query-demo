import { Box, Button, FormControl, Heading } from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { addUser, UserDto } from "../store";
import { FormInput } from "./input/input";

export const UserForm: FC = () => {
  const addUserMutation = useMutation(
    (newUser: UserDto) => {
      return addUser(newUser);
    },
    {
      onSuccess: () => {
        toast.success("User added successfully");
        setName("");
        setSurname("");
      },
    }
  );

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      addUserMutation.mutate({ name, surname });
    },
    [addUserMutation, name, surname]
  );

  return (
    <Box maxW={"sm"} borderWidth={"1px"} borderRadius={"lg"} p="16">
      <Heading size="md" textAlign={"center"}>
        Add a new user
      </Heading>
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormInput
            onChange={(event) => setName(event.target.value)}
            value={name}
            label={"Name"}
            helperText={"Enter the name for a new user"}
          />
          <FormInput
            onChange={(event) => setSurname(event.target.value)}
            value={surname}
            label={"Surname"}
            helperText={"Enter the surname for a new user"}
          />
          <Button
            colorScheme={"teal"}
            type="submit"
            isLoading={addUserMutation.status === "loading"}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
