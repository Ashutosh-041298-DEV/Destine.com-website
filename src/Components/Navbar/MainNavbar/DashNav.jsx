import { Box, Button, Flex } from "@chakra-ui/react";
import { IconButton, Input, InputGroup, InputRightElement , Avatar} from "@chakra-ui/react";
import {HamburgerIcon, SearchIcon, BellIcon} from "@chakra-ui/icons";
import React from 'react'

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth, db, logout } from "../../../Authentication/AuthContext";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function DashNav(){

    const [user, loading] = useAuthState(auth);
  
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
        } catch (err) {
        console.error(err);
      
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);



    const btnRef = React.useRef()
    return (
        <Flex justifyContent='space-between' pl={5} pr={5} pt={3} pb={3} alignItems='center' boxShadow='xl' mb='20px' bg='white'>
            <Flex alignItems='center'>
                <IconButton icon={<HamburgerIcon color='gray'/>} ref={btnRef} colorScheme='lightGray'  size='lg'/>
                <InputGroup>
                    <Input placeholder='Enter amount' />
                    <InputRightElement children={<SearchIcon color='gray.500' />} />
                </InputGroup>
            </Flex>

            <Flex alignItems='center' gap='20px'>
                <Box>
                    <IconButton icon={<BellIcon/>}/>
                </Box>
                <Box>
                    <Box>{name}</Box>
                    <Box>{user?.email}</Box>
                </Box>
                <Box>
                    <Avatar name={name}/>
                </Box>
                <Button onClick={logout} colorScheme='red' color='white'>
                    Logout
                </Button>
            </Flex>
        </Flex>
    )
}