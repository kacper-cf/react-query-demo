import { Table, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";

interface PassengersTableProps {
  passengers: {
    name?: string;
    trips?: number;
  }[];
}

export const PassengersTable: FC<PassengersTableProps> = ({ passengers }) => {
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
            <Td>{name}</Td>
            <Td>{trips || 0}</Td>
          </Tr>
        ))}
      </Table>
    </div>
  );
};
