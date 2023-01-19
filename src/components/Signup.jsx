import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    function Signup_user(){
        if(email === '' || password === '') alert('fill the form')
        axios.post("https://bored-train-boa.cyclic.app/signup/",{email,password})
        .then((e) => {
            alert('Successfully created account')
            navigate('/signin')
        })
        .catch((e) => console.log(e))
    }

  return (
    <FormControl boxShadow='2xl' width={"400px"} margin={'auto'} mt={'100px'} h={'450px'} pt={'20px'} border={"1px solid black"} pl={"50px"} pr={'50px'}>
      <Text fontSize={'30px'} textAlign={'center'} >Signup Form</Text>
      <Text mb={'30px'} >Create your account</Text>
      <FormLabel>Email address</FormLabel>
      <Input onClick={(e)=>setEmail(e.target.value)} type="email" placeholder="email" />
      
      <FormLabel mt={'20px'} >Password</FormLabel>
      <Input onClick={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
      
      <Button onClick={Signup_user} colorScheme={'green'} w={'295px'} mt={'50px'}  type="submit">Submit</Button>
    </FormControl>
  );
}

export default Signup;
