import React from 'react';
import { Box, Image, Text, Button, SimpleGrid, Flex, IconButton } from '@chakra-ui/react';
import { MdFavorite } from 'react-icons/md'; // Import ikon favorite
import StickyBox from './StickyBox'; // Import StickyBox

function ScndBox() {
  // Daftar produk
  const products = [
    {
      id: 1,
      title: 'Living Room Sofa',
      description: 'Create your own scent with our designer kit.',
      price: '$450',
      image: 'https://i.pinimg.com/736x/a6/ce/17/a6ce17a469a620d3e08f9c23a76a4483.jpg',
    },
    {
      id: 2,
      title: 'Scent Designer Kit',
      description: 'Create your own scent with our designer kit.',
      price: '$80',
      image: 'https://i.pinimg.com/736x/aa/37/b3/aa37b349bb1f37926574d1004b7d8a48.jpg',
    },
    {
      id: 3,
      title: 'Classic Wooden Table',
      description: 'A durable wooden table with a timeless design.',
      price: '$350',
      image: 'https://i.pinimg.com/736x/bd/63/82/bd63826a055d9458213b49577a5a81d8.jpg',
    },
    {
      id: 4,
      title: 'Modern Chair',
      description: 'A sleek and stylish chair for your workspace or living area.',
      price: '$200',
      image: 'https://i.pinimg.com/736x/09/d6/eb/09d6eb30a4139cb4fca98478f25f17af.jpg',
    },
    {
      id: 5,
      title: 'Elegant Bookshelf',
      description: 'A modern bookshelf to organize your favorite books.',
      price: '$150',
      image: 'https://i.pinimg.com/736x/71/4e/66/714e66080336ba89b8fdab652a2029ea.jpg',
    },
  ];

  return (
    <Box bg="white" minH="100vh">
      {/* Tambahkan StickyBox di sini */}
      <StickyBox />

      {/* Bagian produk */}
      <SimpleGrid columns={[1, 2, 3, 4]} spacingX={4} spacingY={6}>
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="0px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="sm"
            bg="white"
            m={9}
            textAlign="center"
            maxW="300px"
            mx="auto"
            h="550px"
          >
            <Image
              src={product.image}
              alt={product.title}
              boxSize="325px"
              objectFit="cover"
            />
            <Box p={4}>
              <Text fontWeight="bold">{product.title}</Text>
              <Text color="gray.500">{product.description}</Text>
              <Text fontWeight="medium" mt="2">
                {product.price}
              </Text>
            </Box>
            <Flex justifyContent="space-between" alignItems="center" p={4}>
              <Button variant="solid" colorScheme="teal">
                Buy now
              </Button>
              {/* Tambahkan ikon favorite */}
              <Button
                backgroundColor="transparent" // Warna background transparan
                _hover={{ backgroundColor: "transparent", color: "red" }} // Hover dengan perubahan warna teks
                color="black" // Warna default ikon adalah hitam
              >
                <MdFavorite />
              </Button>

              <Button variant="ghost" color="gray.400">
                Add to cart
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ScndBox;
