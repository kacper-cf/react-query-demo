import { FC, useEffect, useState } from "react";
import { Loader } from "../loader";
import { Pagination } from "../pagination";
import { PassengersTable } from "../passengersTable";
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
    return <Loader />;
  }

  return (
    <>
      <PassengersTable passengers={data?.data || []} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
};
