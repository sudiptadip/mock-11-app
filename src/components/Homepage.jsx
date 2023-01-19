import { Box } from "@chakra-ui/react";
import React from "react";
import Row from "./Row";

export default function Homepage() {
  return (
    <Box
      pt={"80px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      w={"100%"}
      h={"100vh"}
    >
      <Row color={"red"} type={"Critical Severity"} />
      <Row color={"orange"} type={"Major Severity"} />
      <Row color={"blue"} type={"Medium Severity"} />
      <Row color={"green"} type={"Low Severity"} />
    </Box>
  );
}
