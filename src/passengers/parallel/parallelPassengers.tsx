import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { UseQueryResult } from "react-query";
import { PassengersTable } from "../passengersTable";
import { PassengersCollectionDto } from "../store/passengers";

interface ParallelPassengerProps {
  queryResult: UseQueryResult<PassengersCollectionDto, unknown>;
  name: string;
}

export const ParallelPassengers: FC<ParallelPassengerProps> = ({
  queryResult,
  name,
}) => {
  return (
    <div>
      <Heading>{name}</Heading>
      {queryResult.isFetching ? (
        <p>{name} is loading</p>
      ) : (
        <PassengersTable passengers={queryResult.data?.data || []} />
      )}
    </div>
  );
};
