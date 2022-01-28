import {
  Box,
  Button,
  CircularProgress,
  Table,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import { fetchPassengers } from "../store/passengers";

export const CachedPassengers: FC = () => {
  const [page, setPage] = useState(0);

  const { data, isFetching } = useQuery(
    ["passengers", page],
    () => fetchPassengers(page),
    { keepPreviousData: true, staleTime: 10000 }
  );

  if (isFetching) {
    return (
      <Box
        width="50rem"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <CircularProgress isIndeterminate />
      </Box>
    );
  }

  return (
    <div>
      <Table variant={"simple"} width={"50rem"}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Trips</Th>
          </Tr>
        </Thead>
        {data?.data?.map(({ name, trips }) => (
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
        <Button onClick={() => setPage((page) => (page !== 0 ? page - 1 : 0))}>
          Previous
        </Button>
        <p>{page + 1}</p>
        <Button onClick={() => setPage((page) => page + 1)}>Next</Button>
      </Box>
    </div>
  );
};
