import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, useState } from "react";
import { InfiniteData, useInfiniteQuery } from "react-query";
import { fetchPassengers, PassengersCollectionDto } from "../store/passengers";

const mapPagesToComponents = (
  infiniteData: InfiniteData<PassengersCollectionDto> | undefined
) => {
  if (!infiniteData) {
    return [];
  }

  return infiniteData.pages.map(({ data }, pageIndex) => {
    return data.map(({ name, trips }, index) => (
      <Tr key={`${name}_${trips}_${index}`}>
        <Td>{pageIndex}</Td>
        <Td>{name}</Td>
        <Td>{trips || 0}</Td>
      </Tr>
    ));
  });
};

export const LoadMorePassengers: FC = () => {
  const [page, setPage] = useState(1);
  const { fetchNextPage, data, isFetching } = useInfiniteQuery(
    ["passengers"],
    ({ pageParam }) => fetchPassengers(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.totalPages !== pages.length ? page : undefined;
      },
    }
  );

  const onLoadMore = () => {
    fetchNextPage();
    setPage((page) => page + 1);
  };

  return (
    <div>
      <Table variant={"simple"} width={"50rem"}>
        <Thead>
          <Tr>
            <Th>From page</Th>
            <Th>Name</Th>
            <Th>Trips</Th>
          </Tr>
        </Thead>
        <Tbody>{mapPagesToComponents(data)}</Tbody>
      </Table>
      <Box
        width="50rem"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        my={15}
      >
        <Button isLoading={isFetching} onClick={onLoadMore}>
          Load more
        </Button>
      </Box>
    </div>
  );
};
