import { Box, Flex , Heading, Text, Image, Grid, GridItem} from "@chakra-ui/react";

import star from './Images/star.png'
import shield from './Images/shield.png'
import time from './Images/wall-clock.png'
import calendar from './Images/calendar.png'

export default function Benifits(){
    return (
        <Flex width='75%' height='auto' m='auto' justifyContent='space-between' flexDirection={{sm: 'column-reverse', lg: 'row'}}>

            <Box w={{sm: '90%', lg: '60%'}} m={{sm: 'auto', lg: 'none'}}>
                <Box textAlign={{sm: 'center', lg: 'left'}}>
                    <Heading color='mainText'>Use time tracking software to boost productivity by 30%</Heading>
                    <Text mt='20px' letterSpacing={1} lineHeight='1.6' col color='lightText'or='lightText'>A time tracker and workforce management system that will help you develop a high-performing team that smashes goals every time.</Text>
                </Box>

                <Grid templateColumns='repeat(2, 1fr)' gap={6} placeItems='center' mt='30px'>
                    <GridItem w='100%'   textAlign='left'>
                        <Flex gap={2} alignItems='center'>
                            <Image src={star}/>
                            <Heading color='mainText' fontSize='lg'>Skyrocket effectiveness</Heading>
                        </Flex>
                        <Text letterSpacing={1} lineHeight='1.8' mt='10px' color='lightText' fontSize='18px' >
                            Know who's doing what and how it's going all the while eliminating distractions.
                        </Text>
                    </GridItem>
                    <GridItem w='100%'   textAlign='left'>
                        <Flex gap={2} alignItems='center'>
                            <Image src={shield}/>
                            <Heading color='mainText' fontSize='lg'>Minimize business losses</Heading>
                        </Flex>
                        <Text letterSpacing={1} lineHeight='1.8' mt='10px' color='lightText' fontSize='18px' >
                        Get precise insights into projects to determine profitability and allocate resources.
                        </Text>
                    </GridItem>
                    <GridItem w='100%'   textAlign='left'>
                        <Flex gap={2} alignItems='center'>
                            <Image src={time}/>
                            <Heading color='mainText' fontSize='lg'>Automate team management</Heading>
                        </Flex>
                        <Text letterSpacing={1} lineHeight='1.8' mt='10px' color='lightText' fontSize='18px' >
                        Organize shifts, absences, and booking-related questions all in one place.
                        </Text>
                    </GridItem>
                    <GridItem w='100%'   textAlign='left'>
                        <Flex gap={2} alignItems='center'>
                            <Image src={calendar}/>
                            <Heading color='mainText' fontSize='lg'>Avoid burnout</Heading>
                        </Flex>
                        <Text letterSpacing={1} lineHeight='1.8' mt='10px' fontSize='17px'  color='lightText'>
                        Take care of your team and eliminate overworking with break reminders and private time.
                        </Text>
                    </GridItem>
                </Grid>

            </Box>

            <Box width={{sm: '50%', lg: '30%'}} m='auto' mb='20px'>
                <Image src="https://desktime.com/assets/img/new-homepage/boost-productivity/boost-productivity@2x.webp"/>
            </Box>

        </Flex>
    )
}