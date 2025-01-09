import React from 'react';  
import FrstBox from '../components/BestSeller/FrstBox.jsx'; // Pastikan path ini sesuai  
import ScndBox from '../components/BestSeller/ScndBox.jsx';  
import { Container, Flex, Box, VStack } from '@chakra-ui/react';  
import StickyBox from '@/components/BestSeller/StickyBox.jsx';


function BestSeller() {  
    return (
        <Container maxW="container.xl" p={0}>
            <VStack spacing={8} align="stretch"> {/* Add spacing between elements */}
                <Box zIndex="2000"> {/* Ensure navbar z-index is higher */}
                    {/* Add your navbar here */}
                    {/* <Navbar /> */}
                </Box>
                
                {/* Apply margin-top to avoid overlap with StickyBox */}
                <Box mt="80px">
                    <FrstBox />
                </Box>

                {/* Optionally include StickyBox */}
                <Box mt="20px"> {/* Additional margin if necessary */}
                    <StickyBox />
                </Box>
                
                <Box mt="20px">
                    <ScndBox />
                </Box>
            </VStack>
        </Container>
    );
}  

export default BestSeller;