import { Box } from "@chakra-ui/react";
import React from "react";

export default function Bug({color}) {
  return (
    <Box
      p={"5%"}
      borderRadius={"20px"}
      width={"100%"}
      color={"white"}
      bg={color}
    >
      Hello world
    </Box>
  );
}
