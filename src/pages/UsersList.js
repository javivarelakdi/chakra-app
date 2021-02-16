import React, { useState, useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Flex,
    Tr,
    Th,
    Td,
    Button
  } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom';
import apiClient from "../services/apiClient"

export default function UsersList() {
    
    const history = useHistory();
    
    const handleRedirect = (userId) => {
        history.push(`/users/${userId}`)
    }

    const [usersList, setUsersList] = useState(null);
    
    useEffect(() => {
        apiClient
            .getUsers()
            .then(({data}) => {
                setUsersList(data.data);
            })
            .catch(); 
    }, [])

    return (
        <Flex width="full" align="center" justifyContent="center">
            { usersList !== null
            ? <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>username</Th>
                        <Th isNumeric>remaining days</Th>
                        <Th>role</Th>
                        <Th>role</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {usersList.map((user) => { return(        
                        <Tr>
                            <Td>{user.username}</Td>
                            <Td>{user.role}</Td>
                            <Td isNumeric>{user.remainingDays}</Td>
                            <Td><Button onClick={() => handleRedirect(user._id)}>go to user</Button></Td>
                        </Tr>
                    )})}      
                </Tbody>
            </Table>
            : <div>is loading</div>
            }
            {/* <Box
                p={8}
                maxWidth="500px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                role="button"
                onClick={() => handleRedirect("1234")}>
                GO TO SPECIFIC USER
            </Box> */}
         </Flex>
    );
}


