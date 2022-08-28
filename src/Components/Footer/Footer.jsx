import {Box, Flex, Spacer, Stack, Text} from '@chakra-ui/react'
import BottomFoot from './BottomFoot'
import MiddleFoot from './MiddleFoot'
import TopFoot from './TopFoot'

export default function Footer(){
    return (
        <Box>
            <Box bgColor='primary'>
                <TopFoot/>
            </Box>
            <Box bgColor='#ebecec'>
                <MiddleFoot/>
            </Box>
            <Box bgColor='#d6d8d9'>
                <BottomFoot/>
            </Box>
        </Box>
    )
}