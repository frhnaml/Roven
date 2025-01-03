import React from 'react';  
import FrstBox from '../components/BestSeller/FrstBox.jsx'; // Pastikan path ini sesuai  
import ScndBox from '../components/BestSeller/ScndBox.jsx';  
import { Container, Flex, Box, VStack } from '@chakra-ui/react';  


function BestSeller() {  
    return (  
        <Container maxW="container.xl" p={0}>  
            <VStack spacing={8} align="stretch"> {/* Menambahkan spacing antar elemen */}  
                <Box>  
                    <FrstBox />  
                </Box>  
                {/* <Box>  
                    <StickyBox />  
                </Box>   */}
                <Box>  
                    <ScndBox />  
                </Box>  
            </VStack>  
        </Container>  
    );  
}  

export default BestSeller;