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
import { FC, useEffect, useState } from "react";
import { fetchPassengers, PassengersCollectionDto } from "../store/passengers";

const handlePassengersFetch = async (
  page: number,
  setData: (data: PassengersCollectionDto) => void,
  setIsLoading: (isLoading: boolean) => void
) => {
  setIsLoading(true);

  const response = await fetchPassengers(page, 10);

  setData(response);
  setIsLoading(false);
};

export const NotCachedPassengers: FC = () => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PassengersCollectionDto | null>(null);

  useEffect(() => {
    handlePassengersFetch(page, setData, setIsLoading);
  }, [page]);

  if (isLoading) {
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
