import { Box, Flex, Heading } from "@chakra-ui/react";
import AccordionFaq from "./AccordionFaq";

export default function FaqSec(){
    return (
        <Flex flexDirection='column' w='75%'  m='auto' gap='40px'>
            <Box w='70%' m='auto'>
                <Heading color='mainText'>Things worth knowing about using a time tracker</Heading>
            </Box>
            <Box w='75%' m='auto' >
                <AccordionFaq/>
            </Box>
        </Flex>
    )
}