import { Box, Text, IconButton } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";

export default function SocialBtn(){
    return (
        <Box>
            <Text fontWeight='bold' color='lightText'>Or connect with</Text>
            <IconButton icon={<FaFacebookSquare/>} p='10px'/>
        </Box>
    )
}