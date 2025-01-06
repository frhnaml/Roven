import React from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
} from "@chakra-ui/react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function Account() {
  const userName = localStorage.getItem("userName") || "User"; // Fetch username from localStorage

  const handleLogout = () => {
    localStorage.removeItem("userName"); // Clear username on logout
    console.log("Logged out"); // Add additional logout functionality if needed
  };

  return (
    <Box maxWidth="800px" margin="0 auto" paddingTop="10vh" paddingX="4">
      <VStack spacing={6} align="stretch">
        <Text fontSize="3xl" fontWeight="bold">
          Welcome Back, {userName}!
        </Text>

        <Button
          width="100%"
          bg="black"
          color="white"
          _hover={{ bg: "gray.800" }}
          onClick={() => console.log("Navigating to orders")}
        >
          My Orders
        </Button>

        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Address
          </Text>
          <VStack spacing={3} align="stretch">
            {/* Example Address Item */}
            <HStack justify="space-between">
              <Text>123 Main St, Springfield</Text>
              <HStack spacing={2}>
                <IconButton
                  icon={<FaEdit />}
                  aria-label="Edit Address"
                  onClick={() => console.log("Edit Address")}
                />
                <IconButton
                  icon={<FaTrash />}
                  aria-label="Delete Address"
                  onClick={() => console.log("Delete Address")}
                />
              </HStack>
            </HStack>
            <Button
              leftIcon={<FaPlus />}
              onClick={() => console.log("Add Address")}
              colorScheme="teal"
            >
              Add New Address
            </Button>
          </VStack>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Edit Email & Password
          </Text>
          <VStack spacing={3} align="stretch">
            <HStack justify="space-between">
              <Text>Email</Text>
              <Editable defaultValue="user@example.com">
                <EditablePreview />
                <EditableInput />
              </Editable>
              <IconButton
                icon={<FaEdit />}
                aria-label="Edit Email"
                onClick={() => console.log("Edit Email")}
              />
            </HStack>
            <HStack justify="space-between">
              <Text>Password</Text>
              <Editable defaultValue="********">
                <EditablePreview />
                <EditableInput type="password" />
              </Editable>
              <IconButton
                icon={<FaEdit />}
                aria-label="Edit Password"
                onClick={() => console.log("Edit Password")}
              />
            </HStack>
          </VStack>
        </Box>

        <Button
          width="100%"
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </VStack>
    </Box>
  );
}

export default Account;
