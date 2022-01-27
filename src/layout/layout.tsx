import { Box, Flex, Grid } from "@chakra-ui/react";
import { FC } from "react";
import { Navbar } from "./navbar/navbar";

export const Layout: FC = ({ children }) => (
  <Box maxW="max">
    <Flex marginBottom={"15px"}>
      <Navbar />
    </Flex>
    <Box maxW={"max"}>{children}</Box>
  </Box>
);
