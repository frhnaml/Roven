
import React from "react";
import { Button } from "../ui/button";
import { Container, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo Roven.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-start"}
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
          />
        </Link>

        <Text>
          <Link to={"/home"}>Test</Link>
        </Text>
        <Text>
          <Link to={"/home"}>Test</Link>
        </Text>
        <Text>
          <Link to={"/home"}>Test</Link>
        </Text>
        <Text>
          <Link to={"/home"}>Test</Link>
        </Text>

      </Flex>
    </Container>
  );
}

export default Navbar;
