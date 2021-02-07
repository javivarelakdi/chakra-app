import React from 'react';
import {
    Flex,
    Box
} from '@chakra-ui/react';
import {
    useParams
} from "react-router-dom";
  
export default function UsersProfile() {
    let { id } = useParams();
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box
                p={8}
                maxWidth="500px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg">
                <h3>USER ID: {id}</h3>
            </Box>
        </Flex>
    );
}


