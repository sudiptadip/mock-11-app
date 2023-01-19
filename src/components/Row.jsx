import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import Bug from './Bug'

export default function Row({color,type}) {
  return (
    <Box w={'20%'} h={'100%'} boxShadow='2xl' >
        <Button colorScheme={'purple'} mb={"30px"} >Reporting BUG</Button>
        <Box mb={'40px'} p={'5%'} fontSize={'22px'} width={'100%'} color={"white"} bg={color} >{type}</Box>
        <Bug color={color} />
    </Box>
  )
}
