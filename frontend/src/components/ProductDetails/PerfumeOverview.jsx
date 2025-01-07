import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Input,
  Button, // We are using Button instead of IconButton
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaMinus, FaPlus } from "react-icons/fa";
import PerfumeBanner from "../../assets/PERFUME FEMININ/Perfume 20.jpg"; // Default image
import PerfumeImage1 from "../../assets/PERFUME FEMININ/Perfume 8.jpg";
import PerfumeImage2 from "../../assets/PERFUME FEMININ/Perfume 14.jpg";
import PerfumeImage3 from "../../assets/PERFUME FEMININ/Perfume 11.jpg";
import PerfumeImage4 from "../../assets/PERFUME FEMININ/Perfume 10.jpg";
import { CiFacebook } from "react-icons/ci";

function PerfumeOverview() {
  const [selectedImage, setSelectedImage] = useState(PerfumeBanner); // State for main image
  const [quantity, setQuantity] = useState(1); // State for item quantity

  const thumbnails = [
    PerfumeBanner,
    PerfumeImage1,
    PerfumeImage2,
    PerfumeImage3,
    PerfumeImage4,
  ];

  const handleQuantityIncrease = () => setQuantity(quantity + 1); // Increase quantity
  const handleQuantityDecrease = () =>
    setQuantity(quantity > 1 ? quantity - 1 : 1); // Decrease quantity, but not below 1
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) setQuantity(value); // Ensure quantity is positive
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} p={8} gap={8} align="stretch">
      {/* Left section: Main image and thumbnails */}
      <VStack w={{ base: "100%", md: "50%" }} align="center" spacing={4}>
        {/* Main Image */}
        <Image
          src={selectedImage}
          alt="Main product"
          borderRadius="md"
          boxShadow="lg"
          boxSize="300px" // Consistent size for the main image
          objectFit="cover" // Ensures the image fills the box while maintaining aspect ratio
        />
        {/* Thumbnails */}
        <HStack spacing={4}>
          {thumbnails.map((image, idx) => (
            <Image
              key={idx}
              src={image}
              alt={`Thumbnail ${idx + 1}`}
              boxSize="50px" // Consistent size for thumbnails
              cursor="pointer"
              borderRadius="md"
              boxShadow="sm"
              objectFit="cover" // Ensures the thumbnails maintain aspect ratio
              onClick={() => setSelectedImage(image)} // Update main image on click
              border={selectedImage === image ? "2px solid black" : "none"} // Highlight selected thumbnail
            />
          ))}
        </HStack>
      </VStack>

      {/* Right section: Product details */}
      <Box
        w={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            Floraison
          </Text>
          <Text fontSize="xl" fontWeight="semibold" color="gray.500" mb={4}>
            401,000
          </Text>
          <Text fontSize="md" color="gray.600" mb={4}>
            Modern yet timeless. This classic bouquet states romance and beauty
            with modern boldness. A perfect foundation to a charming evening
            full of love and wonder.
          </Text>

          {/* Social Media Share Buttons */}
          <HStack spacing={4} justify={{ base: "center", md: "flex-start" }} mb={6}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              color="black"
            >
              <CiFacebook />
            </Button>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              color="black"
            >
              <FaInstagram />
            </Button>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              color="black"
            >
              <FaTwitter />
            </Button>
          </HStack>
        </Box>

        {/* Quantity Selector and Buttons */}
        <HStack spacing={4} justify={{ base: "center", md: "flex-start" }} mb={4}>
          {/* Quantity Selector */}
          <Text fontWeight="semibold">Quantity:</Text>
          <HStack>
            {/* Decrease and Increase Buttons, and Input wrapped in a single form */}
            <Button
              aria-label="Decrease Quantity"
              onClick={handleQuantityDecrease}
              variant="outline"
              size="sm"
              color="black"
              border="1px solid"
              borderColor="gray.300"
              padding="0"
              minWidth="30px"
            >
              <FaMinus />
            </Button>
            <Input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min={1}
              textAlign="center"
              size="sm"
              width="50px"
              appearance={"none"} // To ensure it is consistent with the buttons
            />
            <Button
              aria-label="Increase Quantity"
              onClick={handleQuantityIncrease}
              variant="outline"
              size="sm"
              color="black"
              border="1px solid"
              borderColor="gray.300"
              padding="0"
              minWidth="30px"
            >
              <FaPlus />
            </Button>
          </HStack>
        </HStack>

        {/* Add to Cart and Buy Now Buttons */}
        <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
          <Button
            size="lg"
            variant="outline" // Border-only button
            colorScheme="blackAlpha"
          >
            Add to Cart
          </Button>

          <Button size="lg" colorScheme="blackAlpha">
            Buy It Now
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}

export default PerfumeOverview;
