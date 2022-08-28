import {Box, HStack, Image, Heading, Flex, Spacer } from '@chakra-ui/react'
import TopMenu from './topMenu'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

export default function RespNav(){
    return (
        <HStack pr={9} pl={9} pt={5} pb={5}>
            <Box>
                <TopMenu/>
            </Box>

            <Spacer/>

            <Box>
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
            <Spacer/>

            <Box>
                <NavLink to={'/login' || '/dashboard'}>
                <ArrowRightIcon/>
                </NavLink>
            </Box>
        </HStack>
    )
}