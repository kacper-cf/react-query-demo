import { FC, useState } from "react";
import { useQuery } from "react-query";
import { Loader } from "../loader";
import { Pagination } from "../pagination";
import { PassengersTable } from "../passengersTable";
import { fetchPassengers } from "../store/passengers";

export const CachedPassengers: FC = () => {
  const [page, setPage] = useState(0);

  const { data, isFetching } = useQuery(
    ["passengers", page],
    () => fetchPassengers(page),
    { keepPreviousData: true, staleTime: 10000 }
  );

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      <PassengersTable passengers={data?.data || []} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
};
