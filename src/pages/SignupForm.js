import React from 'react';
import {
    Flex,
    Box
} from '@chakra-ui/react';
export default function SignupForm() {
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box
                p={8}
                maxWidth="500px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg">
                SIGN UP FORM
            </Box>
        </Flex>
    );
}


