import { Box, CircularProgress } from "@chakra-ui/react";

export const Loader = () => (
  <Box
    width="50rem"
    display={"flex"}
    alignItems={"center"}
    justifyContent={"space-around"}
  >
    <CircularProgress isIndeterminate />
  </Box>
);
