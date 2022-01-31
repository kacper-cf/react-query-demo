import axios, { AxiosResponse } from "axios";
import { endpoints } from "../../shared/config";

export interface PassengersCollectionDto {
  totalPassengers: number;
  totalPages: number;
  data: PassengerDto[];
}

interface PassengerDto {
  name: string;
  trips: number;
}

export const fetchPassengers = async (
  page: number = 0,
  size: number = 10
): Promise<PassengersCollectionDto> => {
  const urlParams = new URLSearchParams();
  urlParams.append("page", page.toString());
  urlParams.append("size", size.toString());

  const response: AxiosResponse<PassengersCollectionDto> = await axios.get(
    `${endpoints.getPassengersApi}?${urlParams.toString()}`
  );

  return response.data;
};

export const longTakingQuery = async (page: number, signal?: AbortSignal) => {
  await sleep(50000);

  const urlParams = new URLSearchParams();
  urlParams.append("page", page.toString());
  urlParams.append("size", "10");

  const response: AxiosResponse<PassengersCollectionDto> = await axios.get(
    `${endpoints.getPassengersApi}?${urlParams.toString()}`,
    { signal }
  );

  return response.data;
};

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, time);
  });
}
