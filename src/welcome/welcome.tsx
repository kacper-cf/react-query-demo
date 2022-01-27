import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { CreatePosts } from "../create-posts/create-posts";

export const Welcome: FC = () => {
  return (
    <div>
      <Heading size="md">Welcome in react query demo!</Heading>
      <CreatePosts />
    </div>
  );
};
