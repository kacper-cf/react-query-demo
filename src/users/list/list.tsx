import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { Loader } from "../../passengers/loader";
import { deleteUser, fetchUsers } from "../store";
export const UserList: FC = () => {
  const { isFetching, data, error, refetch } = useQuery("users", fetchUsers, {
    staleTime: 60000,
  });

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

  if (isFetching) {
    return <Loader />;
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
      <Tbody>
        {data?.map(({ fullName, id }) => (
          <Tr>
            <Td>{id}</Td>
            <Td>{fullName}</Td>
            <Td>
              <Button
                colorScheme={"red"}
                onClick={() => removeUserMutation.mutate(id)}
                isLoading={removeUserMutation.variables === id}
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
