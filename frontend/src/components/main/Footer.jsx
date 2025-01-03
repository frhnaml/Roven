import {
  Box,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <Box bg={"black"} color={"white"} py={10} px={6} mt={200}>
      <Flex
        justify={"space-between"}
        direction={["column", "column", "row"]}
        align={"start"}
        gap={6}
      >
        <VStack align={"start"} spacing={1} flex={1}>
          <Image
            src="src/assets/Logo Roven.png"
            alt="Roven Logo"
            boxSize="100px"
            mb={-2}
          />
          <Text fontSize="md" fontWeight="medium">
            Roven is a perfume store that brings luxurious and elegant scents.
            Discover your character in every drop, as each of our fragrances is
            designed to create a lasting impression.
          </Text>
          <HStack spacing={4} mt={4}>
            {[
              { icon: FaWhatsapp, href: "#" },
              { icon: FaFacebook, href: "#" },
              { icon: FaInstagram, href: "#" },
              { icon: FaLinkedin, href: "#" },
              { icon: FaTiktok, href: "#" },
            ].map((social, idx) => (
              <Box
                as={Link}
                key={idx}
                href={social.href}
                _hover={{
                  transform: "scale(1.2)",
                  filter:
                    "drop-shadow(0 0 1px #FF69B4) drop-shadow(0 0 1px #DB7093)",
                  color: "#FF69B4",
                }}
                transition="transform 0.2s, filter 0.2s, color 0.2s"
              >
                <social.icon size={24} />
              </Box>
            ))}
          </HStack>
        </VStack>

        <VStack align="start" flex={1} spacing={6} mt={4} ml={20}>
          <Text fontWeight="bold">SHOP BY DEPARTMENT</Text>
          <VStack align="start" spacing={1}>
            <Text textAlign="left">Perfumes</Text>
            <Text textAlign="left">Women's Perfume</Text>
            <Text textAlign="left">Men's Cologne</Text>
            <Text textAlign="left">Best Sellers</Text>
            <Text textAlign="left">New Arrivals</Text>
          </VStack>
        </VStack>

        <VStack
          align="start"
          flex={1}
          spacing={6}
          mt={4}
          ml={10} // Geser FOLLOW US lebih ke kanan tanpa memengaruhi SHOP BY DEPARTMENT
        >
          <Text fontWeight="bold">FOLLOW US</Text>
          <VStack align="start" spacing={1}>
            <Link href="#" color="blue.400">
              Instagram
            </Link>
            <Link href="#" color="blue.400">
              Facebook
            </Link>
            <Link href="#" color="blue.400">
              LinkedIn
            </Link>
            <Link href="#" color="blue.400">
              Tiktok
            </Link>
          </VStack>
        </VStack>

        <VStack align="start" flex={1} spacing={6} mt={4}>
          <Text fontWeight="bold">JOIN OUR MAILING LIST</Text>
          <VStack spacing={2} align="start" w="full">
            <Input placeholder="First Name" bg="white" color="black" />
            <Input placeholder="Email" bg="white" color="black" />
            <Button colorScheme="whiteAlpha" bg="white" color="black" w="full">
              Subscribe
            </Button>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Footer;
