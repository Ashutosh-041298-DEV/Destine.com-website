import { Box, Button, Flex, Heading, Input, Text, Link, Spacer } from "@chakra-ui/react"

export default function TopFoot(){
    return (
        <Flex flexDirection='column' w='65vh' m='auto' h='auto' gap='40px' pt='40px' pb='40px'>
            <Box>
                <Heading color='white' fontSize='4xl'>Want to get the most out of your time? Try DeskTime for free!</Heading>
            </Box>
            <Flex gap='10px'>
                <Input type='email' placeholder='Your work Email' bgColor='white' w='60%'/>
                <Button bgColor='primary' color='white' border='1px solid white' colorScheme='green'>START FREE TRIAL</Button>
            </Flex>
            <Box>
                <Text color='white'>Try free for 14 days. No credit card required.</Text>
                <Text></Text>
            </Box>
        </Flex>
    )
}