import { Box } from "@chakra-ui/react";
import TopSec from "./TopSection/TopSec";
import Benifits from "./Benifits/Benifits";
import FaqSec from "./FAQSec/FaqSec";

export default function HomePage(){
    return (
        <>
            <Box
                borderRadius="0% 0% 100% 100% / 0% 39% 61% 61%"
                bg="#f0f1f1"
                h="80vh"
                w="100%"
                mt='100px'
            >
                <TopSec />
            </Box>

            <Box w='100%' mt='50px' >
                <Benifits/>
            </Box>

            <Box w='100%' mb='50px' mt='50px' >
                <FaqSec/>
            </Box>
        </>
    )
}