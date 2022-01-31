import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";

export interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      mt="15"
    >
      <Button
        onClick={() => setPage((page: number) => (page !== 0 ? page - 1 : 0))}
      >
        Previous
      </Button>
      <p>{page + 1}</p>
      <Button onClick={() => setPage((page: number) => page + 1)}>Next</Button>
    </Box>
  );
};
