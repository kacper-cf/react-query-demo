import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { Loader } from "../../passengers/loader";
import { deleteUser, fetchUsers } from "../store";

export const UserList: FC = () => {
  const { isFetching, data, refetch, error } = useQuery(
    "users",
    () => fetchUsers(),
    {
      staleTime: 60000,
    }
  );

  const removeUserMutation = useMutation(
    "deleteUser",
    (userId: string) => deleteUser(userId),
    {
      onSuccess: async () => {
        toast.success("User deleted successfully");
        await refetch();
      },
      onError: () => {
        toast.error("An error occurred when tried to remove user");
      },
      retry: false,
    }
  );

  if (error) {
    return <div>An error occurred</div>;
  }

  if (isFetching) {
    return <Loader />;
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
      <Tbody>
        {data?.map(({ fullName, id }) => (
          <Tr key={id}>
            <Td>{id}</Td>
            <Td>{fullName}</Td>
            <Td>
              <Button
                colorScheme={"red"}
                onClick={() => removeUserMutation.mutate(id)}
                isLoading={Boolean(removeUserMutation.variables === id)}
              >
                Remove a user
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
