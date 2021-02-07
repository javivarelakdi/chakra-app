import React from 'react';
import {
    Flex,
    Box
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
export default function UsersList() {
    
    const history = useHistory();
    
    const handleRedirect = (userId) => {
        history.push(`/users/${userId}`)
    }

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box
                p={8}
                maxWidth="500px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                role="button"
                onClick={() => handleRedirect("1234")}>
                GO TO SPECIFIC USER
            </Box>
        </Flex>
    );
}


