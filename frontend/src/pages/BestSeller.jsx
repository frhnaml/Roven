import { Bleed, Box, Heading, Stack, Text, Container } from '@chakra-ui/react';  
import React from 'react';  
import bgBestSellerImage from '../assets/bgBestSeller.jpg'; // Import gambar dengan path yang benar  


function BestSeller() {  
  return (  
    <Box  
      bgImage={`url(${bgBestSellerImage})`} // Menggunakan variabel image  
      bgSize="cover"  
      bgPosition="center"  
      h="100vh"  
      color="white"  
      display="flex"  
      alignItems="center"  
      justifyContent="center"  
    >  
      <Container textAlign="center">  
        <Text fontSize="4xl" fontWeight="bold">  
          Best Sellers  
        </Text>  
        <Text fontSize="lg" mt={4}>  
          Don't know where to start?  
        </Text>  
        <Text fontSize="lg" mt={2}>  
          Here's our full line up of our best sellers  
        </Text>  
      </Container>  
      
        

    </Box>  
  );  
}  

export default BestSeller;