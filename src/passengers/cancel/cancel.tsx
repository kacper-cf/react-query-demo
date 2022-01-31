import { Button } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { queryClient } from "../../query/queryProvider";
import { ParallelPassengers } from "../parallel/parallelPassengers";
import { longTakingQuery } from "../store/passengers";

export const CancelQuery = () => {
  const veryLongQuery = useQuery(["passengers", 3], ({ signal }) =>
    longTakingQuery(3, signal)
  );

  const onCancelQueries = () => {
    queryClient.cancelQueries(["passengers", 3]);
    console.log("Query was cancelled by react-query");
  };

  return (
    <div>
      <ParallelPassengers queryResult={veryLongQuery} name="Third query" />
      <Button onClick={onCancelQueries}>Cancel this very long query!</Button>
    </div>
  );
};
