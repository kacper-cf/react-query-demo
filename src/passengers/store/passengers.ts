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
