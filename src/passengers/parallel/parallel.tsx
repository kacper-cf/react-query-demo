import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { useQueries } from "react-query";
import { fetchPassengers } from "../store/passengers";
import { ParallelPassengers } from "./parallelPassengers";

export const PassengersParrallel: FC = () => {
  const [firstQuery, secondQuery] = useQueries([
    { queryKey: ["passengers", 1], queryFn: () => fetchPassengers(1) },
    { queryKey: ["passengers", 2], queryFn: () => fetchPassengers(2) },
  ]);

  return (
    <Box>
      <ParallelPassengers queryResult={firstQuery} name="First query" />
      <ParallelPassengers queryResult={secondQuery} name="Second query" />
    </Box>
  );
};
