import { Box , Flex, Image, Heading, Link, Input, Text, Button} from "@chakra-ui/react";
import googlePlay from './logos/google-play-badge.png'
import apple from './logos/apple.png'
import fb from './logos/fb.png'
import twitter from './logos/twitter.png'
import yt from './logos/yt.png'
import linkedin from './logos/linkedin.png'
import skype from './logos/iconmonstr-skype-1-32.png'
import whatsapp from './logos/iconmonstr-whatsapp-1-32.png'

export default function MiddleFoot(){
    return (
        <Flex h='auto' w='75%' alignItems='center' m='auto' flexDirection='column' gap='25px' pt='20px' pb='20px'>

            <Flex alignItems="center" w='100%' m='auto' justifyContent='space-between'>

                <Flex alignItems="center">
                    <Image
                    src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/9e85a16a-c862-4238-9ca5-f5dfa2df8a84.png?auto=format&ixlib=react-9.0.3"
                    w="3rem"
                    />
                    <Heading as="h1" size="lg" fontWeight="medium">
                    DeskTime
                    </Heading>
                </Flex>
                
                <Flex  w='30%'>

                    <Link w='40%' m='auto'>
                        <Image src={googlePlay}/>
                    </Link>

                    <Link w='40%' m='auto' >
                        <Image src={apple} />
                    </Link>
                    
                </Flex>
            </Flex>

            <Flex  w='100%' m='auto' justifyContent='space-between' alignItems='center'>
                <Flex gap='20px'>
                    <Link m='auto' >
                        <Image src={fb} />
                    </Link>
                    <Link  m='auto' >
                        <Image src={twitter} />
                    </Link>
                    <Link  m='auto' >
                        <Image src={yt} />
                    </Link>
                    <Link  m='auto' >
                        <Image src={linkedin} />
                    </Link>
                    <Link  m='auto' >
                        <Image src={skype} />
                    </Link>
                    <Link  m='auto' >
                        <Image src={whatsapp} />
                    </Link>

                </Flex>

                <Flex w='50%' alignItems='center' gap='5px'>
                    <Text>Subscribe to our newsletter</Text>
                    <Input type='email' placeholder='Type in your Email' borderColor='gray'/>
                        <Button
                            varient="solid"
                            fontSize="14px"
                            p={5}
                            colorScheme="green"
                            background="primary"
                            border='1px'
                            borderColor='outline'
                            fontWeight="400"
                            >
                            SUBSCRIBE
                        </Button>
                </Flex>
            </Flex>
            
        </Flex>
    )
}