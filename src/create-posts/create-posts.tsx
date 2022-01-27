import { Box, Button, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { apiBaseUrl, endpoints } from "../shared/config";

export const CreatePosts = () => {
  const [value, setValue] = useState("1");

  const addPostsMutation = useMutation("addPosts", async () => {
    const promises: Promise<void>[] = [];

    for (let i = 1; i <= +value; i++) {
      promises.push(
        axios.post(`${apiBaseUrl}${endpoints.addPosts}`, {
          title: `Post ${i}`,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem, eos voluptatibus voluptatem veniam at dolorem voluptate rerum tempore aliquam.",
        })
      );
    }

    return Promise.allSettled(promises);
  });
  return (
    <Box mt={15}>
      <Heading size="sm">How many posts do you want to create?</Heading>
      <Input onChange={(event) => setValue(event.target.value)} value={value} />
      <Button
        onClick={() => addPostsMutation.mutate()}
        isLoading={addPostsMutation.isLoading}
      >
        Create test posts
      </Button>
    </Box>
  );
};
