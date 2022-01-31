import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import { queryClient } from "../query/queryProvider";

const invalidateQuery = (queryName?: string) => {
  if (queryName) {
    return queryClient.invalidateQueries(queryName);
  }

  queryClient.invalidateQueries();
};

export const Welcome: FC = () => {
  const invalidateAllQueries = () => invalidateQuery();
  const invalidateUsers = () => queryClient.invalidateQueries("users");

  return (
    <Box marginRight={"15"}>
      <Heading size="md">Welcome in react query demo!</Heading>
      <SimpleGrid>
        <Button
          colorScheme={"red"}
          mt={15}
          mb={15}
          onClick={invalidateAllQueries}
        >
          Invalidate all queries!
        </Button>
        <Button colorScheme={"red"} mt={15} mb={15} onClick={invalidateUsers}>
          Invalidate users query!
        </Button>
      </SimpleGrid>
    </Box>
  );
};
