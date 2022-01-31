import { FC } from "react";
import { useQueries } from "react-query";
import { PassengersTable } from "../passengersTable";
import { fetchPassengers } from "../store/passengers";

export const PassengersParrallel: FC = () => {
  const [firstQuery, secondQuery] = useQueries([
    { queryKey: ["passengers", 1], queryFn: () => fetchPassengers(1) },
    { queryKey: ["passengers", 2], queryFn: () => fetchPassengers(2) },
  ]);

  return (
    <div>
      {firstQuery.isFetching ? (
        <p>First query is loading</p>
      ) : (
        <PassengersTable passengers={firstQuery.data?.data || []} />
      )}
      {secondQuery.isFetching ? (
        <p>Second query is loading</p>
      ) : (
        <PassengersTable passengers={firstQuery.data?.data || []} />
      )}
    </div>
  );
};
