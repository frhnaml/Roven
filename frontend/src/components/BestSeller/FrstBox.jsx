import { Box, Text, Container, Flex } from '@chakra-ui/react';  
import React from 'react';  
import bgBestSellerImage from '../../assets/bgBestSeller.jpg'; // Pastikan path ini sesuai  

function FrstBox() {  
    return (  
        <Box  
            bgImage={`url(${bgBestSellerImage})`} // Menggunakan variabel image  
            bgSize="cover"  
            bgPosition="center"  
            minHeight="100vh" 
            
            color="white" 
            display="flex"  
            flexDirection="column"  
            
        >  
            <Container textAlign="center" flex={1} display="flex" alignItems="center" justifyContent="center">  
                <Flex direction="column" align="center">  
                    <Text fontSize="4xl" fontWeight="bold">  
                        Best Sellers  
                    </Text>  
                    <Text fontSize="lg" mt={2}>  
                        Don't know where to start?  
                    </Text>  
                    <Text fontSize="lg" mt={2}>  
                        Here's our full line up of our best sellers  
                    </Text>  
                </Flex>  
            </Container>  

            
        </Box>  
    );  
}  

export default FrstBox;