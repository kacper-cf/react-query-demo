import {
  Button,
  CircularProgress,
  Flex,
  Table,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { fetchUsers, deleteUser } from "../store";
export const UserList: FC = () => {
  const { isLoading, data, error, refetch } = useQuery("users", fetchUsers);

  const removeUserMutation = useMutation(
    "deleteUser",
    (userId: string) => deleteUser(userId),
    {
      onSuccess: async () => {
        toast.success("User deleted successfully");
        await refetch();
      },
    }
  );

  if (isLoading) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"}>
        <CircularProgress isIndeterminate />
      </Flex>
    );
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  if (!data?.length) {
    return <div>No users were found.</div>;
  }

  return (
    <Table variant={"simple"} maxW={"max"}>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name and surname</Th>
        </Tr>
      </Thead>
      {data?.map(({ fullName, id }) => (
        <Tr>
          <Td>{id}</Td>
          <Td>{fullName}</Td>
          <Td>
            <Button
              colorScheme={"red"}
              onClick={() => removeUserMutation.mutate(id)}
              isLoading={removeUserMutation.status === "loading"}
            >
              Remove a user
            </Button>
          </Td>
        </Tr>
      ))}
    </Table>
  );
};
