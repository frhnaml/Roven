import { Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo Roven.png";
import { Link } from "react-router-dom";
import { RiAccountCircle2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

function Navbar() {
  return (
    <Container>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"} // Aligns the content to space between
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Link to={"/"}>
          <Image
            src={logo} // Update the path to your logo image
            alt="Logo"
            py={5}
            boxSize={{ base: "100px", sm: "120px" }} // Adjust the size of your logo
            objectFit="contain" // Makes sure the logo scales properly
            backgroundColor="transparent" // Ensures no background behind the logo
          />
        </Link>

        <HStack spacing={6} alignItems={"center"}>
          <Text>
            <Link to={"/home"}>Best Sellers</Link>
          </Text>
          <Text>
            <Link to={"/login"}>Login</Link>
          </Text>
          <Text>
            <Link to={"/home"}>Test</Link>
          </Text>
          <Text>
            <Link to={"/home"}>Test</Link>
          </Text>
        </HStack>

        {/* Icons on the right */}
        <HStack spacing={6} alignItems={"center"} ml="auto"> {/* Added ml="auto" */}
          <Link to={"/login"}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              color="black" // Set the icon color
            >
              <RiAccountCircle2Line />
            </Button>
          </Link>

          <Link to={"/login"}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              color="black" // Set the icon color
            >
              <IoMdSearch />
            </Button>
          </Link>

          <Link to={"/login"}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              color="black" // Set the icon color
            >
              <IoBagOutline />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
