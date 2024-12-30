import { Box, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Footer() {
  return (
    <Box bg={"black"} color={"white"} py={10} px={6}>
      <Flex
        justify={"space-between"}
        direction={["column", "column", "row"]}
        align={["center", "start", "center"]}
        gap={6}
      >
        <VStack align={"start"} spacing={4}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Roven
          </Text>
          <Text>SMELL LIKE MONEY</Text>
          <HStack>
            <Link to={"/"} color="blue.400">
              Terms Of Service
            </Link>
            <Link to={"/"} color="blue.400">
              Privacy Policy
            </Link>
          </HStack>
        </VStack>

        <VStack>
          <Text fontWeight="bold">GET IN TOUCH</Text>
          <Text>Mon-Friday</Text>
          <Text>10AM-4PM EST</Text>
          <VStack align="start" spacing={1}>
            <Link href="#" color="blue.400">
              Contact
            </Link>
            <Link href="#" color="blue.400">
              Instagram
            </Link>
            <Link href="#" color="blue.400">
              Pinterest
            </Link>
          </VStack>
        </VStack>

        <VStack>
          <Text fontWeight="bold">JOIN OUR MAILING LIST</Text>
          <VStack spacing={2} align="start" w="full">
            <Input placeholder="First Name" bg="white" color="black" />
            <Input placeholder="Email" bg="white" color="black" />
            <Button colorScheme="whiteAlpha" bg="white" color="black" w="full">
              Subscribe
            </Button>
          </VStack>
        </VStack>

        <VStack align="start" spacing={4}>
          <Text fontWeight="bold">EXPLORE</Text>
          <VStack align="start" spacing={1}>
            <Link href="#" color="blue.400">
              Home
            </Link>
            <Link href="#" color="blue.400">
              Services
            </Link>
            <Link href="#" color="blue.400">
              Our Story
            </Link>
            <Link href="#" color="blue.400">
              Works
            </Link>
            <Link href="#" color="blue.400">
              Glossary
            </Link>
            <Link href="#" color="blue.400">
              Contact
            </Link>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Footer;
