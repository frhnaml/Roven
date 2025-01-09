import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function StickyBox() {
    return (
        <Box
            position="sticky"
            top="60px" // Adjusted top to prevent overlap with navbar
            bg="white" // Background color is white
            p={6} // Padding
            border="1px solid" // Border with 1px thickness
            borderColor="gray.300" // Border color is gray
            zIndex="1000" // Ensuring the sticky box stays on top
        >
            <Flex justify="center" align="center">
                <Text fontSize="xl" fontWeight="bold" color="gray.600" textAlign="center">
                    Parfume with a choice of luxury only
                </Text>
            </Flex>
        </Box>
    );
}

export default StickyBox;
