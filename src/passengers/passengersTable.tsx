import { Box, Button, Table, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";

interface PassengersTableProps {
  passengers: {
    name?: string;
    trips?: number;
  }[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PassengersTable: FC<PassengersTableProps> = ({
  passengers,
  page,
  setPage,
}) => {
  return (
    <div>
      <Table variant={"simple"} width={"50rem"}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Trips</Th>
          </Tr>
        </Thead>
        {passengers.map(({ name, trips }) => (
          <Tr>
            <Td textAlign={"center"}>{name}</Td>
            <Td textAlign={"center"}>{trips || 0}</Td>
          </Tr>
        ))}
      </Table>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        mt="15"
      >
        <Button
          onClick={() => setPage((page: number) => (page !== 0 ? page - 1 : 0))}
        >
          Previous
        </Button>
        <p>{page + 1}</p>
        <Button onClick={() => setPage((page: number) => page + 1)}>
          Next
        </Button>
      </Box>
    </div>
  );
};
