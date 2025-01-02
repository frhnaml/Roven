import React from 'react';
import { Box, Image, Text, Button, SimpleGrid, Flex } from '@chakra-ui/react';
import StickyBox from '../BestSeller/StickyBox.jsx'; // Import komponen StickyBox
import bgBestSellerImage from '../../assets/bgBestSeller.jpg';

function ScndBox() {
    return (
        <Box bg="white" minH="100vh"> {/* Tambahkan background putih dan minimum tinggi */}
            {/* StickyBox di bagian atas */}
            <StickyBox />

            {/* Konten halaman */}
            <Box p={4} mt={15}> {/* Tambahkan margin-top untuk memberi ruang ke StickyBox */}
                <SimpleGrid columns={4} spacing={4}>
                    {/* Kartu 1 */}
                    <Box borderWidth="0px" borderRadius="lg" overflow="hidden">
                        <Image
                            src="https://i.pinimg.com/736x/a6/ce/17/a6ce17a469a620d3e08f9c23a76a4483.jpg"
                            alt="Living Room Sofa"
                            boxSize="325px"
                            objectFit="cover"
                        />
                        <Box p={4}>
                            <Text fontWeight="bold">Living Room Sofa</Text>
                            <Text color="gray.500">
                                This sofa is perfect for modern tropical spaces, baroque inspired spaces.
                            </Text>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $450
                            </Text>
                        </Box>
                        <Flex justifyContent="space-between" p={4}>
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Flex>
                    </Box>

                    {/* Kartu lainnya */}
                    <Box borderWidth="0px" borderRadius="lg" overflow="hidden">
                        <Image
                            src="https://i.pinimg.com/736x/aa/37/b3/aa37b349bb1f37926574d1004b7d8a48.jpg"
                            alt="Scent Designer Kit"
                            boxSize="325px"
                            objectFit="cover"
                        />
                        <Box p={4}>
                            <Text fontWeight="bold">Scent Designer Kit</Text>
                            <Text color="gray.500">
                                Create your own scent with our designer kit.
                            </Text>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $80
                            </Text>
                        </Box>
                        <Flex justifyContent="space-between" p={4}>
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Flex>
                    </Box>

                    {/* Kartu lainnya */}
                    <Box borderWidth="0px" borderRadius="lg" overflow="hidden">
                        <Image
                            src="https://i.pinimg.com/736x/bd/63/82/bd63826a055d9458213b49577a5a81d8.jpg"
                            alt="Scent Designer Kit"
                            boxSize="325px"
                            objectFit="cover"
                        />
                        <Box p={4}>
                            <Text fontWeight="bold">Scent Designer Kit</Text>
                            <Text color="gray.500">
                                Create your own scent with our designer kit.
                            </Text>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $80
                            </Text>
                        </Box>
                        <Flex justifyContent="space-between" p={4}>
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Flex>
                    </Box>

                    {/* Kartu lainnya */}
                    <Box borderWidth="0px" borderRadius="lg" overflow="hidden">
                        <Image
                            src="https://i.pinimg.com/736x/09/d6/eb/09d6eb30a4139cb4fca98478f25f17af.jpg"
                            alt="Scent Designer Kit"
                            boxSize="325px"
                            objectFit="cover"
                        />
                        <Box p={4}>
                            <Text fontWeight="bold">Scent Designer Kit</Text>
                            <Text color="gray.500">
                                Create your own scent with our designer kit.
                            </Text>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $80
                            </Text>
                        </Box>
                        <Flex justifyContent="space-between" p={4}>
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Flex>
                    </Box>

                    {/* Kartu lainnya */}
                    <Box borderWidth="0px" borderRadius="lg" overflow="hidden">
                        <Image
                            src="https://i.pinimg.com/736x/71/4e/66/714e66080336ba89b8fdab652a2029ea.jpg"
                            alt="Scent Designer Kit"
                            boxSize="325px"
                            objectFit="cover"
                        />
                        <Box p={4}>
                            <Text fontWeight="bold">Scent Designer Kit</Text>
                            <Text color="gray.500">
                                Create your own scent with our designer kit.
                            </Text>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $80
                            </Text>
                        </Box>
                        <Flex justifyContent="space-between" p={4}>
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Flex>
                    </Box>

                    {/* Lanjutkan dengan kartu lainnya seperti sebelumnya */}
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default ScndBox;
