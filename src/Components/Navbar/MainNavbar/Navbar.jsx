import { Box, Button, Image, Heading, Flex } from "@chakra-ui/react";

import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Authentication/AuthContext";
import DashNav from "./DashNav";


export default function Navbar() {

  

  const [user] = useAuthState(auth);

  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    setPath(window.location.pathname)
  }, [user, window.location.pathname])


  return (
    <>
    {
      path !== '/dashboard' ? 
        <Flex
          justifyContent="space-between"
          gap="50px"
          alignItems="center"
          width="75%"
          margin="auto"
          pt={5}
          pb={5}
        >
          <Box w="20%">
              <NavLink to='/'>
            <Flex alignItems="center">
                <Image
                  src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/9e85a16a-c862-4238-9ca5-f5dfa2df8a84.png?auto=format&ixlib=react-9.0.3"
                  w="3rem"
                />
                <Heading as="h1" size="lg" fontWeight="medium">
                  DeskTime
                </Heading>
            </Flex>
              </NavLink>
          </Box>

          <Flex style={{gap:"25px", alignItems:"center"}} className={styles.navDiv}>
            <Box color='lightText' >
              <a href="#">Demo</a>
            </Box>
            <Box color='lightText'>
              <a href="#">Features</a>
            </Box>
            <Box color='lightText'>
              <a href="#">Pricing</a>
            </Box>
            <Box color='lightText'>
              <a href="#">About us</a>
            </Box>
            <Box color='lightText'>
              <a href="#">FAQ</a>
            </Box>
            <Box color='lightText'>
              <a href="#">Blog</a>
            </Box>
            {user === null ? <>
              <Box>
              <NavLink to='/login' >
                <Button variant="outline"  fontSize="14px" p={2} fontWeight="500">
                  LOGIN
                </Button>
              </NavLink>
            </Box>
            <Box>
              <NavLink to='/signup'>
                <Button
                  varient="solid"
                  fontSize="14px"
                  p={2}
                  colorScheme="green"
                  background="primary"
                  border='1px'
                  borderColor='outline'
                  fontWeight="400"
                >
                  SIGN UP
                </Button>
              </NavLink>
            </Box>
            </>
            : <> <Box>
              <NavLink to='/dashboard'>
                <Button
                  varient="solid"
                  fontSize="14px"
                  p={2}
                  colorScheme="green"
                  background="primary"
                  border='1px'
                  borderColor='outline'
                  fontWeight="400"
                >
                  MY DESKTIME
                </Button>
              </NavLink>
            </Box> </>}
            <Box>
          
            </Box>
        
          </Flex>
    </Flex> :  <DashNav/> 
}
    </>
  );
}
