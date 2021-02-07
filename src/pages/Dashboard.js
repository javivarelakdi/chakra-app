import React from 'react';
import {
    Link
} from "react-router-dom"
import {
    Flex,
    Box
} from '@chakra-ui/react';
export default function Dashboard() {
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Link to="/users">
                <Box
                    p={8}
                    maxWidth="500px"
                    borderWidth={1}
                    borderRadius={8}
                    boxShadow="lg">
                    GO TO USERS LIST
                </Box>
            </Link>
            <Link to="/requestform">
                <Box
                    p={8}
                    maxWidth="500px"
                    borderWidth={1}
                    borderRadius={8}
                    boxShadow="lg">
                    SUBMIT A REQUEST
                </Box>
            </Link>
            <Link to="/requests">
                <Box
                    p={8}
                    maxWidth="500px"
                    borderWidth={1}
                    borderRadius={8}
                    boxShadow="lg">
                    CHECK YOUR REQUESTS
                </Box>
            </Link>
        </Flex>
    );
}


