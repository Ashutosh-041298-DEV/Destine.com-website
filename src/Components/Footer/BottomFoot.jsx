import {Box, Flex, Spacer, Text} from '@chakra-ui/react'

export default function BottomFoot(){
    return (
        <Flex h='7vh' w='75%' alignItems='center' m='auto'>
            <Box>
                <Text fontSize='12px'>© 2011 - 2022 DeskTime</Text>
            </Box>
            <Spacer/>
            <Box textAlign='left' lineHeight='1' color='lightText'>
                <Text><span style={{fontSize: '10px'}}> PART OF</span> <br/> <span style={{fontSize: '14px', fontWeight: 'bold' }}>DERAGIUM GROUP</span> </Text>
            </Box>
        </Flex>
    )
}