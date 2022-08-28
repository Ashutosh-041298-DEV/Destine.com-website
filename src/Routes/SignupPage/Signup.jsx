import {Box, Button, Heading,  Text, Flex, Link} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
  
import SocialBtn from '../../Components/SocialButton';

import styles from '../logsign.module.css'

import { useToast } from '@chakra-ui/react'

// Auth Imports->
import React , {useEffect, useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import { 
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle 
} from '../../Authentication/AuthContext';


export default function Signup(){

    const toast = useToast()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
 
        registerWithEmailAndPassword(name, email, password , toast);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);


    return (
        <Flex mt='120px' p={5} w='60vh' ml='auto' mr='auto' flexDirection='column' gap='30px'>
            <Flex flexDirection='column' >
                <Heading fontSize='4xl' color='mainText'>Sign Up to DeskTime</Heading>

                <Flex flexDir='column' gap='20px'>    
                    <FormControl mt='30px'>
                    <FormLabel>First and last name</FormLabel>
                    <Input type='text' placeholder='Type in your first and last name' value={name} onChange={(e) => setName(e.target.value)} mt='-10px'/>
                    </FormControl>

                    <FormControl >
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Type in your email address' value={email} onChange={(e) => setEmail(e.target.value)} mt='-10px'/>
                    </FormControl>

                    <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='Password' placeholder='Create a password' value={password} onChange={(e) => setPassword(e.target.value)} mt='-10px'/>
                    </FormControl>
                </Flex>

                <Button type='submit' onClick={register} fontSize='14px' fontWeight='400' bgColor='primary' color='white' colorScheme='green' border='1px' borderColor='outline' w='100%' mt='30px'>
                    SIGNUP FOR FREE
                </Button>
                <Button type='submit' onClick={signInWithGoogle} fontSize='14px' fontWeight='400' bgColor='primary' color='white' colorScheme='green' border='1px' borderColor='outline' w='100%' mt='30px'>
                    SIGNUP WITH GOOGLE
                </Button>

                <Link className={styles.link} color='lightText'>I forgot my Password</Link>
                <Text>Alerady have an account? <NavLink to='/login'>Login</NavLink></Text>
            </Flex>
            <Box border='1px solid gray' w='100%'>
                <SocialBtn/>
            </Box>
        </Flex>
    )
}