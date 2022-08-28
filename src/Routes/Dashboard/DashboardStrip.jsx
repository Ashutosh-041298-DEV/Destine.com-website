import { Box, Button, Flex, Heading, IconButton, Input, Text } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";


function getCurrentDate(separator='-'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }

export default function DashboardStrip(){

    

    return(
        <Flex alignItems='center' justifyContent='space-between' p={3} pl='40px' pr='40px' bg='white'>
            <Heading fontSize='4xl' fontWeight='normal' color='mainText'>My DeskTime</Heading>

            <Flex gap='1' alignItems='center'>
                <Text fontSize='xl' color='mainText'>{getCurrentDate()}</Text>
                <Input type='datetime-local' w='150px' bgColor='green.300' color='white'/>
                <Box>
                    <Button fontWeight='md' variant='outline' colorScheme='green' borderRadius='5px' ml='3px'>DAY</Button>
                    <Button fontWeight='md' variant='outline' colorScheme='green' borderRadius='5px' ml='3px'>WEEK</Button>
                    <Button fontWeight='md' variant='outline' colorScheme='green' borderRadius='5px' ml='3px'>MONTH</Button>
                </Box>
                <IconButton icon={<QuestionIcon color='gray.500'/>} variant='outline'/>
            </Flex>
        </Flex>
    )
}