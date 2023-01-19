import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logindata } from "../Redux/Authreducer/Action";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Signin() {
  const [email, setEmail] = useState("fg");
  const [password, setPassword] = useState("");
  const naviget = useNavigate()
  const dispatch = useDispatch();
  const data = useSelector((e) =>  e.Auth_Reducer)
 
  useEffect(()=>{
 if(data.token){
    naviget('/')
  }
  },[data])

  function Signup_user() {
    console.log({ email, password });
    dispatch(logindata({ email, password }));
  }

  return (
    <FormControl
      boxShadow="2xl"
      width={"400px"}
      margin={"auto"}
      mt={"100px"}
      h={"450px"}
      pt={"20px"}
      border={"1px solid black"}
      pl={"50px"}
      pr={"50px"}
    >
      <Text fontSize={"30px"} mb={"30px"} textAlign={"center"}>
        Signin Form
      </Text>
      <FormLabel>Email address</FormLabel>
      <Input
        onClick={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />

      <FormLabel mt={"20px"}>Password</FormLabel>
      <Input
        onClick={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />

      <Button
        onClick={Signup_user}
        colorScheme={"green"}
        w={"295px"}
        mt={"50px"}
        type="submit"
      >
        Submit
      </Button>
    </FormControl>
  );
}

export default Signin;
