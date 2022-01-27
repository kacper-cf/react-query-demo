import axios, { AxiosResponse } from "axios";
import { apiBaseUrl, endpoints } from "../shared/config";

interface UserModel {
  id: string;
  fullName: string;
}

interface UsersCollectionDto {
  [key: string]: {
    name: string;
    surname: string;
  };
}

export interface UserDto {
  name: string;
  surname: string;
}

export const fetchUsers = async (): Promise<UserModel[] | null> => {
  const response: AxiosResponse<UsersCollectionDto> = await axios.get(
    `${apiBaseUrl}/${endpoints.getUsers}`
  );

  return mapDto(response.data);
};

function mapDto(dto: UsersCollectionDto | null): UserModel[] {
  if (!dto) {
    return [];
  }

  const entries = Object.entries(dto);

  return entries.map(([id, user]) => ({
    id,
    fullName: `${user.name} ${user.surname}`,
  }));
}

export const deleteUser = async (userId: string) => {
  return axios.delete(
    `${apiBaseUrl}${endpoints.removeUserById}/${userId}.json`
  );
};

export const addUser = async ({ name, surname }: UserDto) =>
  axios.post(`${apiBaseUrl}/${endpoints.addUsers}`, { name, surname });
