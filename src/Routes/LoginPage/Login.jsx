import {Box, Button, Heading, Flex,Text} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input
} from '@chakra-ui/react'

import SocialBtn from '../../Components/SocialButton';

import styles from '../logsign.module.css'

import React , {useEffect, useState} from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../Authentication/AuthContext'
import { useAuthState } from 'react-firebase-hooks/auth'



export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
        
        return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);


    return (
        <Flex mt='150px' p={5} w='50vh' ml='auto' mr='auto' flexDirection='column' gap='30px'>
            <Flex flexDirection='column'>
                <Heading color='mainText'>Log in to DeskTime</Heading>

                <FormControl mt='30px' >
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Type in your Email address' value={email} onChange={(e) => setEmail(e.target.value)} mt='-10px'/>
                <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='Password' placeholder='Type in your Password' value={password} onChange={(e) => setPassword(e.target.value)} mt='-10px'/>
                </FormControl>

                <Button type='submit' onClick={() => logInWithEmailAndPassword(auth, email, password)} bgColor='primary' color='white' colorScheme='green' border='1px' borderColor='outline' w='100%' mt='30px'>
                    Login
                </Button>
                <Button type='submit' onClick={signInWithGoogle} bgColor='primary' color='white' colorScheme='green' border='1px' borderColor='outline' w='100%' mt='30px'>
                    Login using Google
                </Button>

                <NavLink to='/reset' className={styles.link} color='lightText' mt='30px'>I forgot my Password</NavLink>
                <Text mt='10px'>Don’t have an account yet? <NavLink to='/signup' className={styles.link} color='lightText'> Sign up here!</NavLink> </Text>
            </Flex>
            <Box border='1px solid gray' w='100%'>
                <SocialBtn/>
            </Box>
        </Flex>
    )
}