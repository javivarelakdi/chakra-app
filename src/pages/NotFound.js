import React from 'react';
import {
    Flex,
    Box
} from '@chakra-ui/react';
import {
    useLocation
} from "react-router-dom";
export default function NotFound() {
    const location = useLocation();
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box
                p={8}
                maxWidth="500px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg">
                404: url not found. No match for <code>{location.pathname}</code>
            </Box>
        </Flex>
    );
}