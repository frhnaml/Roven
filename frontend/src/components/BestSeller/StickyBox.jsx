import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function StickyBox() {
    return (
        <Box
            position="sticky"
            top="0" // Tetap di bagian atas  
            bg="white" // Latar belakang putih  
            p={8} // Padding  
            //   boxShadow="md" // Bayangan untuk efek kedalaman  
            border="1px solid" // Border dengan ketebalan 1px  
            borderColor="gray.300" // Warna border abu-abu  
            zIndex="1000"
        >
            <Flex justify="center" align="center">
                {/* Konten StickyBox */}
                <Text fontSize="xl" fontWeight="bold" color="gray.600" textAlign="center">
                    Parfume with a choice of luxury only
                </Text>
            </Flex>
        </Box>
    );
}

export default StickyBox;
